/**
 * Lógica Principal de la Aplicación: Guía Territorial Pinto y La Tenería
 * Arquitectura SPA Responsive y Multiplataforma
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentTab: 'general',
  speechSynthesisUtterance: null,
  isSpeaking: false,
  savedFavorites: JSON.parse(localStorage.getItem('pinto_favorites') || '[]'),

  init() {
    this.setupRouting();
    this.setupNavigation();
    this.setupDirectoryFilters();
    this.setupSearch();
    this.setupModals();
    this.setupAudioReader();
    this.setupFavorites();
    this.setupPrintAction();
    this.setupDesignComparison();

    // Iniciar mapas una vez el DOM esté listo
    setTimeout(() => {
      if (window.MapController) {
        MapController.setupAllMaps();
      }
      if (window.lucide) {
        lucide.createIcons();
      }
    }, 100);
  },

  // 1. Manejo de Rutas y Pestañas
  setupRouting() {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'general';
      const validTabs = ['general', 'espana', 'pinto', 'teneria', 'ies-calderon', 'naturaleza', 'gastronomia'];
      if (validTabs.includes(hash)) {
        this.switchTab(hash, false);
      } else {
        this.switchTab('general', false);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();
  },

  switchTab(tabId, updateHash = true) {
    this.currentTab = tabId;

    if (updateHash) {
      window.location.hash = `#${tabId}`;
    }

    // Actualizar paneles visibles
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${tabId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }

    // Actualizar botones de navegación de escritorio
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar barra de navegación móvil inferior
    document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
      if (btn.dataset.tab === tabId) {
        btn.classList.add('text-[#006a58]', 'font-bold');
        btn.classList.remove('text-slate-500');
      } else {
        btn.classList.remove('text-[#006a58]', 'font-bold');
        btn.classList.add('text-slate-500');
      }
    });

    // Actualizar breadcrumbs superiores
    this.updateBreadcrumb(tabId);

    // Scroll arriba suave
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refrescar mapas si la pestaña tiene mapa
    if (window.MapController) {
      MapController.refreshActiveMaps();
    }

    // Detener audio si estaba leyendo
    this.stopSpeaking();
  },

  updateBreadcrumb(tabId) {
    const crumbContainer = document.getElementById('dynamic-breadcrumb');
    if (!crumbContainer) return;

    const names = {
      general: 'Guía General',
      espana: 'España · Marco Peninsular',
      pinto: 'Pinto · Municipio Histórico & Km 0',
      teneria: 'Barrio La Tenería I y II',
      'ies-calderon': 'IES Calderón de la Barca',
      naturaleza: 'Naturaleza & Deportes',
      gastronomia: 'Gastronomía & Sabores'
    };

    crumbContainer.innerHTML = `
      <a href="#general" class="hover:text-emerald-700 transition">Inicio</a>
      <span class="mx-1.5 text-slate-400">/</span>
      <span class="text-slate-700 font-medium">${names[tabId] || 'Guía'}</span>
    `;
  },

  // 2. Interfaz de Navegación (Escritorio y Móvil)
  setupNavigation() {
    // Botones de pestañas escritorio
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Botones de pestañas móvil
    document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Botones de navegación contextual "Continuar a..."
    document.querySelectorAll('[data-goto]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dest = btn.dataset.goto;
        this.switchTab(dest);
      });
    });

    // Menú hamburguesa móvil
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    if (menuToggle && mobileDrawer) {
      const openDrawer = () => {
        mobileDrawer.classList.remove('translate-x-full');
        drawerBackdrop.classList.remove('hidden');
      };
      const closeDrawer = () => {
        mobileDrawer.classList.add('translate-x-full');
        drawerBackdrop.classList.add('hidden');
      };

      menuToggle.addEventListener('click', openDrawer);
      if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
      if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

      // Cerrar drawer al hacer click en enlaces
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    }
  },

  // 3. Filtros del Directorio Gastronómico
  setupDirectoryFilters() {
    const filterBtns = document.querySelectorAll('.dir-filter-btn');
    const cards = document.querySelectorAll('.directory-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('bg-[#006a58]', 'text-white');
          b.classList.add('bg-slate-100', 'text-slate-700');
        });

        btn.classList.remove('bg-slate-100', 'text-slate-700');
        btn.classList.add('bg-[#006a58]', 'text-white');

        const category = btn.dataset.category;

        cards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  },

  // 4. Sistema de Búsqueda Global
  setupSearch() {
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchOpenBtns = document.querySelectorAll('.open-search-btn');
    const searchCloseBtn = document.getElementById('close-search-btn');

    if (!searchModal) return;

    const openSearch = () => {
      searchModal.classList.remove('hidden');
      searchModal.classList.add('flex');
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
        this.renderSearchResults('');
      }
    };

    const closeSearch = () => {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    };

    searchOpenBtns.forEach(btn => btn.addEventListener('click', openSearch));
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

    // Atajo de teclado: Ctrl+K o Cmd+K o '/'
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
        closeSearch();
      }
    });

    // Cerrar al click fuera
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.renderSearchResults(e.target.value.trim().toLowerCase());
      });
    }
  },

  renderSearchResults(query) {
    const container = document.getElementById('search-results');
    if (!container) return;

    if (!query) {
      container.innerHTML = `
        <div class="p-6 text-center text-slate-400">
          <p class="text-sm">Escribe para buscar monumentos, colegios, rutas, locales o servicios...</p>
          <div class="mt-4 flex flex-wrap gap-2 justify-center">
            <span class="search-tag cursor-pointer bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs text-slate-600 px-3 py-1.5 rounded-full" onclick="App.searchFor('Torre de Éboli')">Torre de Éboli</span>
            <span class="search-tag cursor-pointer bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs text-slate-600 px-3 py-1.5 rounded-full" onclick="App.searchFor('IES Calderón')">IES Calderón</span>
            <span class="search-tag cursor-pointer bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs text-slate-600 px-3 py-1.5 rounded-full" onclick="App.searchFor('Ombligos de Pinto')">Ombligos de Pinto</span>
            <span class="search-tag cursor-pointer bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs text-slate-600 px-3 py-1.5 rounded-full" onclick="App.searchFor('Arroyo Culebro')">Arroyo Culebro</span>
            <span class="search-tag cursor-pointer bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs text-slate-600 px-3 py-1.5 rounded-full" onclick="App.searchFor('Juan Pablo II')">Bulevar Juan Pablo II</span>
          </div>
        </div>
      `;
      return;
    }

    const searchableItems = [
      { title: 'Torre de Éboli', tab: 'pinto', category: 'Patrimonio', desc: 'Fortaleza del s. XIV y prisión de Doña Ana de Mendoza. Centro peninsular.', icon: 'landmark' },
      { title: 'Plaza de la Constitución & Monolito', tab: 'pinto', category: 'Patrimonio', desc: 'Monolito conmemorativo del centroide peninsular y epicentro cívico.', icon: 'map-pin' },
      { title: 'IES Calderón de la Barca', tab: 'ies-calderon', category: 'Educación', desc: 'Instituto público bilingüe, Bachillerato y Ciclos Formativos de Informática (SMR, DAM, DAW).', icon: 'graduation-cap' },
      { title: 'Parque Gabriel Celaya', tab: 'teneria', category: 'Espacio Verde', desc: 'Pulmón social de La Tenería con calistenia y juegos infantiles.', icon: 'trees' },
      { title: 'Parque Municipal Juan Carlos I', tab: 'naturaleza', category: 'Parque Periurbano', desc: '55 hectáreas con lago artificial navegable y Arqueopinto.', icon: 'trees' },
      { title: 'Senda Ecológica del Arroyo Culebro', tab: 'naturaleza', category: 'Ruta Deportiva', desc: 'Corredor fluvial de 5,6 km para senderismo, running y BTT.', icon: 'bike' },
      { title: 'Los Ombligos de Pinto', tab: 'gastronomia', category: 'Dulce Típico', desc: 'Masa sablé y corazón de chocolate puro o avellana. Receta oficial registrada.', icon: 'cookie' },
      { title: 'Villa del Chocolate y La Colonial (1854)', tab: 'gastronomia', category: 'Historia Fabril', desc: 'Tradición chocolatera desde 1854 y Feria del Chocolate en febrero.', icon: 'factory' },
      { title: 'Centro de Salud La Tenería', tab: 'teneria', category: 'Sanidad', desc: 'Centro de atención primaria en Calle Juan Pablo II.', icon: 'heart-pulse' },
      { title: 'Cercanías C-3 Pinto', tab: 'espana', category: 'Transporte', desc: 'Línea ferroviaria histórica con trenes a Madrid-Atocha y Sol en 25 min.', icon: 'train' }
    ];

    const results = searchableItems.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-slate-400">
          <p>No se encontraron resultados para "<strong>${query}</strong>".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(r => `
      <div class="p-3.5 border-b border-slate-100 hover:bg-emerald-50/60 cursor-pointer transition rounded-lg flex items-center justify-between"
           onclick="App.navigateToItem('${r.tab}')">
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <i data-lucide="${r.icon || 'chevron-right'}" class="w-4 h-4"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-slate-800 text-sm">${r.title}</h4>
              <span class="text-[10px] uppercase font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">${r.category}</span>
            </div>
            <p class="text-xs text-slate-500 mt-0.5 line-clamp-1">${r.desc}</p>
          </div>
        </div>
        <i data-lucide="arrow-right" class="w-4 h-4 text-emerald-600 shrink-0 ml-2"></i>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
  },

  searchFor(term) {
    const input = document.getElementById('search-input');
    if (input) {
      input.value = term;
      this.renderSearchResults(term.toLowerCase());
    }
  },

  navigateToItem(tab) {
    const searchModal = document.getElementById('search-modal');
    if (searchModal) {
      searchModal.classList.add('hidden');
      searchModal.classList.remove('flex');
    }
    this.switchTab(tab);
  },

  // 5. Sistema de Modales de Detalle
  setupModals() {
    const detailModal = document.getElementById('detail-modal');
    const closeBtn = document.getElementById('close-detail-btn');

    if (!detailModal) return;

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        detailModal.classList.add('hidden');
        detailModal.classList.remove('flex');
      });
    }

    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) {
        detailModal.classList.add('hidden');
        detailModal.classList.remove('flex');
      }
    });
  },

  openDetailModal(itemKey) {
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-modal-body');
    if (!modal || !content) return;

    const items = {
      eboli: {
        title: "La Torre de Éboli y el Centro Peninsular",
        category: "Patrimonio Nacional · Siglo XIV",
        image: "assets/images/torre-eboli.jpg",
        body: `
          <p class="text-slate-600 leading-relaxed mb-4">
            La <strong>Torre de Éboli</strong> es la construcción más insigne de Pinto. Con sus 25 metros de altura y gruesos muros de sillería de piedra caliza blanca, fue erigida a mediados del siglo XIV como torre de vigilancia y alcázar señorial.
          </p>
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
            <h4 class="font-bold text-amber-900 text-sm mb-1">Prisión Histórica de Doña Ana de Mendoza (1579)</h4>
            <p class="text-xs text-amber-800 leading-relaxed">
              En julio de 1579, el rey Felipe II ordenó arrestar a la Princesa de Éboli por su implicación en intrigas palaciegas y la muerte del secretario Juan de Escobedo. Permaneció enclaustrada seis meses en la cámara alta de este torreón antes de su traslado a Santorcaz y Pastrana.
            </p>
          </div>
          <h4 class="font-bold text-slate-800 text-sm mb-2">Km 0 y Centroide Peninsular</h4>
          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            Desde la dominación andalusí y los cálculos de astrónomos y agrimensores medievales, la tradición cartográfica ha consagrado a Pinto como el centro geográfico exacto de la Península Ibérica, hoy conmemorado en la Plaza de la Constitución con su emblemático monolito.
          </p>
        `
      },
      ombligos: {
        title: "Los 'Ombligos de Pinto': Receta Oficial",
        category: "Patrimonio Dulce y Artesanal",
        image: "assets/images/ombligos-pinto.jpg",
        body: `
          <p class="text-slate-600 leading-relaxed mb-4">
            Presentados en el año 2005 como símbolo dulce de la villa, los <strong>'Ombligos de Pinto'</strong> rinden homenaje a la condición de Pinto como centro neurálgico de España ("el ombligo de la península").
          </p>
          <div class="grid grid-cols-3 gap-2 mb-4 text-center">
            <div class="p-3 bg-emerald-50 rounded-lg">
              <span class="block text-emerald-800 font-bold text-xs uppercase">Masa</span>
              <span class="text-xs text-emerald-900 font-medium">Sablé con mantequilla pura</span>
            </div>
            <div class="p-3 bg-emerald-50 rounded-lg">
              <span class="block text-emerald-800 font-bold text-xs uppercase">Corazón</span>
              <span class="text-xs text-emerald-900 font-medium">Ganache 70% de chocolate</span>
            </div>
            <div class="p-3 bg-emerald-50 rounded-lg">
              <span class="block text-emerald-800 font-bold text-xs uppercase">Variantes</span>
              <span class="text-xs text-emerald-900 font-medium">Fresa y avellana tostada</span>
            </div>
          </div>
          <p class="text-slate-600 text-sm leading-relaxed">
            Se comercializan exclusivamente en la red de pastelerías asociadas de Pinto (Pastelería Éboli, Los Galerones, Obrador San José) bajo estándares de calidad artesanal garantizada.
          </p>
        `
      },
      calderon: {
        title: "IES Calderón de la Barca",
        category: "Educación Pública Bilingüe y Tecnológica",
        image: "assets/images/ies-calderon.jpg",
        body: `
          <p class="text-slate-600 leading-relaxed mb-4">
            Ubicado en Calle Asturias, s/n (La Tenería II), el <strong>IES Calderón de la Barca</strong> es el referente de educación secundaria, bachillerato y formación profesional técnica de Pinto.
          </p>
          <div class="space-y-3 mb-4">
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <h5 class="font-bold text-xs text-slate-800">Familia Profesional de Informática y Comunicaciones</h5>
              <p class="text-xs text-slate-500 mt-0.5">Formación integral en SMR (Sistemas Microinformáticos y Redes), DAM (Desarrollo Multiplataforma) y DAW (Desarrollo Web) con un 92% de inserción laboral en empresas de Madrid.</p>
            </div>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <h5 class="font-bold text-xs text-slate-800">Innovación Educativa & STEAM</h5>
              <p class="text-xs text-slate-500 mt-0.5">Aulas digitales, robótica educativa con Arduino, huerto escolar ecológico adscrito a Ecoescuelas y proyectos internacionales Erasmus+.</p>
            </div>
          </div>
        `
      }
    };

    const data = items[itemKey];
    if (!data) return;

    content.innerHTML = `
      <div class="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">${data.category}</span>
            <h3 class="text-xl sm:text-2xl font-bold text-white mt-1">${data.title}</h3>
          </div>
        </div>
      </div>
      <div class="p-6">
        ${data.body}
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  },

  // 6. Lector de Audio (Accesibilidad & Audio-Guía)
  setupAudioReader() {
    const ttsBtn = document.getElementById('tts-toggle-btn');
    if (!ttsBtn || !('speechSynthesis' in window)) {
      if (ttsBtn) ttsBtn.style.display = 'none';
      return;
    }

    ttsBtn.addEventListener('click', () => {
      if (this.isSpeaking) {
        this.stopSpeaking();
      } else {
        this.startSpeaking();
      }
    });
  },

  startSpeaking() {
    const activePanel = document.querySelector('.view-panel.active');
    if (!activePanel) return;

    // Obtener texto principal de la vista
    const title = activePanel.querySelector('h1')?.innerText || '';
    const subtitle = activePanel.querySelector('p')?.innerText || '';
    const textToRead = `${title}. ${subtitle}`;

    window.speechSynthesis.cancel();

    this.speechSynthesisUtterance = new SpeechSynthesisUtterance(textToRead);
    this.speechSynthesisUtterance.lang = 'es-ES';
    this.speechSynthesisUtterance.rate = 1.0;

    const ttsBtn = document.getElementById('tts-toggle-btn');

    this.speechSynthesisUtterance.onstart = () => {
      this.isSpeaking = true;
      if (ttsBtn) {
        ttsBtn.classList.add('bg-emerald-600', 'text-white');
        ttsBtn.title = 'Detener audio-guía';
      }
    };

    this.speechSynthesisUtterance.onend = () => {
      this.stopSpeaking();
    };

    this.speechSynthesisUtterance.onerror = () => {
      this.stopSpeaking();
    };

    window.speechSynthesis.speak(this.speechSynthesisUtterance);
  },

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
    const ttsBtn = document.getElementById('tts-toggle-btn');
    if (ttsBtn) {
      ttsBtn.classList.remove('bg-emerald-600', 'text-white');
      ttsBtn.title = 'Escuchar resumen (Audio-guía)';
    }
  },

  // 7. Favoritos / Marcadores en LocalStorage
  setupFavorites() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
      const id = btn.dataset.favId;
      if (this.savedFavorites.includes(id)) {
        btn.classList.add('text-rose-500');
      }

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFavorite(id, btn);
      });
    });
  },

  toggleFavorite(id, btn) {
    if (this.savedFavorites.includes(id)) {
      this.savedFavorites = this.savedFavorites.filter(item => item !== id);
      btn.classList.remove('text-rose-500');
    } else {
      this.savedFavorites.push(id);
      btn.classList.add('text-rose-500');
    }
    localStorage.setItem('pinto_favorites', JSON.stringify(this.savedFavorites));
  },

  // 8. Botón Descargar Guía (PDF / Impresión)
  setupPrintAction() {
    const printBtns = document.querySelectorAll('.download-pdf-btn');
    printBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    });
  },

  // 9. Comparador con Diseños Stitch Originales
  setupDesignComparison() {
    const compBtn = document.getElementById('toggle-stitch-preview-btn');
    const compModal = document.getElementById('stitch-preview-modal');
    const compImg = document.getElementById('stitch-preview-img');
    const closeCompBtn = document.getElementById('close-stitch-preview');

    if (!compBtn || !compModal) return;

    const designImages = {
      general: 'assets/designs/page-1-guia-general.jpg',
      espana: 'assets/designs/page-2-espana.jpg',
      pinto: 'assets/designs/page-3-pinto.jpg',
      teneria: 'assets/designs/page-4-teneria.jpg',
      'ies-calderon': 'assets/designs/page-5-ies-calderon.jpg',
      naturaleza: 'assets/designs/page-6-naturaleza.jpg',
      gastronomia: 'assets/designs/page-7-gastronomia.jpg'
    };

    compBtn.addEventListener('click', () => {
      const imgSrc = designImages[this.currentTab] || designImages.general;
      if (compImg) compImg.src = imgSrc;
      compModal.classList.remove('hidden');
      compModal.classList.add('flex');
    });

    if (closeCompBtn) {
      closeCompBtn.addEventListener('click', () => {
        compModal.classList.add('hidden');
        compModal.classList.remove('flex');
      });
    }

    compModal.addEventListener('click', (e) => {
      if (e.target === compModal) {
        compModal.classList.add('hidden');
        compModal.classList.remove('flex');
      }
    });
  }
};

// Asegurar disponibilidad global para atributos onclick inline
window.App = App;

