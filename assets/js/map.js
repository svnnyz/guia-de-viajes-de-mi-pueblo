/**
 * Controlador de Cartografía Interactiva con Leaflet.js
 * Soporta mapas en España, Pinto, La Tenería e IES Calderón
 */

const MapController = {
  maps: {},

  // Configuración de iconos personalizados
  getMarkerIcon(category) {
    const colors = {
      patrimonio: '#d97706', // Ámbar
      educacion: '#0284c7',  // Azul
      naturaleza: '#16a34a', // Verde
      gastronomia: '#ea580c',// Naranja
      servicios: '#006a58',  // Teal institucional
      transporte: '#9333ea'  // Púrpura
    };

    const color = colors[category] || '#006a58';

    return L.divIcon({
      className: 'custom-map-pin',
      html: `
        <div style="background-color: ${color}; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 8px rgba(0,0,0,0.3); border: 2.5px solid #ffffff; cursor: pointer;">
          <div style="width: 8px; height: 8px; background: white; border-radius: 50%;"></div>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });
  },

  // Inicialización de mapa genérico
  initMap(containerId, center, zoom, points = []) {
    const container = document.getElementById(containerId);
    if (!container) return null;

    // Si ya existe instancia previa, destruirla para evitar fugas
    if (this.maps[containerId]) {
      this.maps[containerId].remove();
      delete this.maps[containerId];
    }

    // Usar estilo CartoDB Positron / OSM limpio
    const map = L.map(containerId, {
      center: center,
      zoom: zoom,
      scrollWheelZoom: false,
      zoomControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Añadir puntos
    points.forEach(p => {
      const icon = this.getMarkerIcon(p.category);
      const marker = L.marker([p.lat, p.lng], { icon: icon }).addTo(map);

      const popupHtml = `
        <div style="font-family: inherit; max-width: 240px; padding: 2px;">
          <span style="display:inline-block; font-size:10px; font-weight:700; color:#006a58; text-transform:uppercase; margin-bottom:2px;">
            ${p.badge || p.category}
          </span>
          <h4 style="margin:0 0 4px 0; font-size:14px; font-weight:700; color:#0f172a;">${p.title}</h4>
          <p style="margin:0 0 6px 0; font-size:12px; color:#475569; line-height:1.35;">${p.desc || p.address}</p>
          ${p.address ? `<div style="font-size:11px; color:#64748b;">📍 ${p.address}</div>` : ''}
          <div style="margin-top:8px;">
            <a href="https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}" target="_blank" rel="noopener" 
               style="display:inline-block; font-size:11px; font-weight:600; color:#006a58; text-decoration:none; background:#e6f4f1; padding:4px 8px; border-radius:6px;">
               Abrir en Google Maps ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
    });

    this.maps[containerId] = map;

    // Recalcular dimensiones una vez cargado
    setTimeout(() => {
      map.invalidateSize();
    }, 250);

    return map;
  },

  // Inicializar todos los mapas de la página según la pestaña
  setupAllMaps() {
    // 1. Mapa de España / Madrid / Pinto
    if (document.getElementById('map-espana')) {
      this.initMap('map-espana', [40.2415, -3.6997], 12, [
        {
          id: 'pinto-centroid',
          title: 'Pinto, Madrid (Centroide Peninsular)',
          category: 'patrimonio',
          lat: 40.2415,
          lng: -3.6997,
          address: '40°14\'29"N 3°41\'59"O • Centro Histórico',
          desc: 'Vórtice geográfico tradicional y encrucijada del sur de Madrid.',
          badge: 'Centroide Peninsular'
        }
      ]);
    }

    // 2. Mapa Municipal de Pinto
    if (document.getElementById('map-pinto')) {
      const pintoPoints = TERRITORIAL_DATA.mapPoints.filter(p => 
        ['patrimonio', 'transporte', 'naturaleza'].includes(p.category)
      );
      this.initMap('map-pinto', [40.243, -3.696], 14, pintoPoints);
    }

    // 3. Mapa de La Tenería I y II
    if (document.getElementById('map-teneria')) {
      const teneriaPoints = TERRITORIAL_DATA.mapPoints.filter(p =>
        ['educacion', 'servicios', 'naturaleza'].includes(p.category)
      );
      this.initMap('map-teneria', [40.249, -3.704], 15, teneriaPoints);
    }

    // 4. Mapa del IES Calderón de la Barca
    if (document.getElementById('map-calderon')) {
      this.initMap('map-calderon', [40.2492, -3.7028], 16, [
        {
          id: 'ies-calderon-main',
          title: 'IES Calderón de la Barca',
          category: 'educacion',
          lat: 40.2492,
          lng: -3.7028,
          address: 'Calle Asturias, s/n, 28320 Pinto (Madrid)',
          desc: 'Entrada principal de alumnos por Calle Asturias. Bulevar arbolado pacificado.',
          badge: 'Centro Educativo'
        }
      ]);
    }
  },

  // Invalidate size en tab switch
  refreshActiveMaps() {
    setTimeout(() => {
      Object.values(this.maps).forEach(map => {
        if (map && typeof map.invalidateSize === 'function') {
          map.invalidateSize();
        }
      });
    }, 200);
  }
};

window.MapController = MapController;

