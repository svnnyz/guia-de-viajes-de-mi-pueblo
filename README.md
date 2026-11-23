# Guía Territorial y Comunitaria: Pinto y La Tenería

Aplicación web interactiva, responsive y multiplataforma basada en los diseños de **Google Stitch Labs** para la **Guía Territorial y Comunitaria de Pinto y La Tenería (Comunidad de Madrid)**.

---

## 🌟 Características Destacadas

1. **Fidelidad Total a los Diseños Stitch**:
   - Replicación exacta de los 7 módulos y vistas:
     1. **Guía General**: Visión general, hitos territoriales, resumen de equipamientos y directorio cívico.
     2. **España**: Marco geográfico peninsular, centroide histórico de Pinto, macro-infraestructuras (A-4, C-3, LAV) y competencias administrativas.
     3. **Pinto**: Monografía municipal, Torre de Éboli, prisión de Doña Ana de Mendoza, monolito del centro peninsular, patrimonio y transporte.
     4. **El Barrio: La Tenería I y II**: Urbanismo sostenible, comparativa de fases, bulevares (Juan Pablo II y Manuel de Falla), parques y comercio de proximidad.
     5. **IES Calderón de la Barca**: Oferta académica (ESO bilingüe, Bachillerato EvAU, Ciclos FP Informática: SMR, DAM, DAW), laboratorios, huerto escolar y secretaría.
     6. **Naturaleza, Rutas y Deporte**: Parque Municipal Juan Carlos I (55 ha), Parque Gabriel Celaya, Arroyo Culebro, calistenia 24h y senderismo.
     7. **Gastronomía Local**: Tradición de la Villa del Chocolate (1854), receta oficial de los **'Ombligos de Pinto'**, tapeo castellano y directorio filtrable de hostelería.

2. **Diseño Responsive y Multiplataforma**:
   - **Móvil / Smartphone**: Barra de navegación inferior nativa (bottom bar), menú drawer lateral táctil y tarjetas fluidas.
   - **Tablet & Portátil**: Grids adaptativos de 2 y 3 columnas con tipografía optimizada.
   - **Escritorio / Pantallas Grandes**: Píldoras de navegación activa, atajos de teclado (`⌘K` / `Ctrl+K`), mapas integrados de alta resolución.
   - **PWA (Progressive Web App)**: Con manifiesto (`manifest.json`) y Service Worker (`sw.js`) para instalación local y uso sin conexión.

3. **Interactividad Avanzada**:
   - **Cartografía Interactiva Leaflet**: Mapas reales con OpenStreetMap y CartoDB Positron en Pinto, La Tenería y el IES Calderón con coordenadas geodésicas reales.
   - **Búsqueda Global en Tiempo Real**: Búsqueda instantánea de monumentos, paradas de tren, rutas, pastelerías y colegios.
   - **Modales de Detalle**: Información histórica ampliada al hacer clic en las tarjetas principales.
   - **Filtro Dinámico de Hostelería**: Filtro instantáneo entre obradores/pastelerías, mesones de tapeo y terrazas contemporáneas.
   - **Audio-Guía Accesible (Text-to-Speech)**: Botón de locución en español para escuchar el resumen de cada sección.
   - **Exportación a PDF**: Estilos de impresión `@media print` para generar la guía limpia en PDF con un clic.
   - **Comparador de Bocetos Stitch**: Botón para comparar la aplicación en vivo contra los diseños originales de Stitch.

---

## 🚀 Cómo Ejecutar la Aplicación

### Opción 1: Abrir directamente en el navegador (Sin dependencias)
Haz doble clic en el archivo:
```text
C:\Users\Maricielo\.gemini\antigravity\scratch\guia-pinto-teneria\index.html
```
o ábrelo directamente en Google Chrome, Microsoft Edge, Firefox o Safari.

### Opción 2: Servidor local ligero con Python
Desde la terminal en el directorio del proyecto:
```bash
python -m http.server 8000
```
Y abre en tu navegador: [http://localhost:8000](http://localhost:8000)

---

## 📁 Estructura del Proyecto

```text
guia-pinto-teneria/
├── index.html                   # Documento principal SPA con las 7 vistas
├── procedimiento.html           # Caso de estudio: Procedimiento, Prompts e IAs utilizadas
├── open.bat                     # Lanzador rápido para abrir la app en el navegador
├── open-procedimiento.bat       # Lanzador rápido para abrir la página de procedimiento
├── manifest.json                # Manifiesto PWA para instalación multiplataforma
├── sw.js                        # Service Worker para caché offline
├── README.md                    # Documentación y guía de uso
├── assets/
│   ├── css/
│   │   └── styles.css           # Tokens de diseño Stitch, animaciones y media queries
│   ├── js/
│   │   ├── app.js               # Enrutamiento, modales, búsqueda, audio y filtros
│   │   ├── data.js              # Datos territoriales oficiales
│   │   └── map.js               # Controlador Leaflet.js para mapas interactivos
│   ├── images/                  # Activos fotográficos recortados de alta fidelidad
│   ├── designs/                 # Capturas completas originales de Google Stitch
│   └── procedure/               # Evidencias de prompts, chats de IA y mockups generados
```
