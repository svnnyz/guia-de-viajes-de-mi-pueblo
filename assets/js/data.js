/**
 * Base de Datos Territorial y Comunitaria de Pinto y La Tenería
 * Extraída de los diseños oficiales de Stitch Google Labs
 */

const TERRITORIAL_DATA = {
  general: {
    title: "Pinto y La Tenería: Guía Territorial y Comunitaria",
    subtitle: "Descubre el posicionamiento territorial y cartográfico de la península Ibérica, la vida de los barrios Tenería y el entorno escolar en el IES Calderón de la Barca.",
    badges: [
      { id: "all", label: "Todos los Ámbitos", active: true },
      { id: "patrimonio", label: "Patrimonio Histórico" },
      { id: "teneria", label: "Vida en La Tenería" },
      { id: "educacion", label: "IES Calderón de la Barca" },
      { id: "deporte", label: "Naturaleza & Deportes" },
      { id: "gastronomia", label: "Gastronomía Local" }
    ],
    highlights: [
      {
        id: "espana",
        tag: "Península Ibérica",
        title: "España",
        desc: "Centro geográfico e histórico peninsular.",
        icon: "map-pin",
        link: "#espana"
      },
      {
        id: "eboli",
        tag: "Km 0 Simbólico",
        title: "Torre de Éboli",
        desc: "Fortaleza del siglo XIV y centro eclesiástico de época.",
        icon: "landmark",
        link: "#pinto"
      },
      {
        id: "teneria",
        tag: "La Tenería I y II",
        title: "Entorno Residencial",
        desc: "Barrio residencial con bulevares verdes, parques y vida familiar.",
        icon: "home",
        link: "#teneria"
      },
      {
        id: "ies",
        tag: "IES Calderón de la Barca",
        title: "Centro Educativo Bilingüe",
        desc: "Referente formativo con ESO, Bachillerato y FP técnica.",
        icon: "graduation-cap",
        link: "#ies-calderon"
      }
    ]
  },

  espana: {
    badge: "ÁMBITO ESTATAL · ESPAÑA (PENÍNSULA IBÉRICA) · ESCALA MACRO & CONEXIÓN COMARCAL",
    moduleCode: "MÓDULO CARTOGRÁFICO 01",
    title: "España: Marco Geográfico, Histórico y Peninsular",
    subtitle: "La perspectiva macro: situación en el suroeste de Europa, encrucijada cultural y organización territorial que acoge a la Comunidad de Madrid y la Comarca Sur.",
    metrics: [
      { value: "505.990", unit: "km²", label: "Superficie Total", note: "4º país más extenso del continente europeo", icon: "maximize-2" },
      { value: "~48M", unit: "habitantes", label: "Población Censada", note: "Alta concentración metropolitana en el eje central", icon: "users" },
      { value: "17", unit: "CC.AA. + 2 Ciudades", label: "Descentralización", note: "Estructura autonómica constitucional (1978)", icon: "building-2" },
      { value: "Mediterráneo", unit: "Interior Continentalizado", label: "Régimen Climático", note: "Inviernos térmicos rigurosos y estíos cálidos", icon: "sun" }
    ],
    centroidInfo: {
      title: "El Centro Geográfico Peninsular: De Madrid a Pinto",
      text: "Históricamente, la determinación del centroide de la Península Ibérica ha sido objeto de investigaciones topográficas, tradiciones populares y cálculos astronómicos. Durante la dominación andalusí y posteriormente en el siglo XIV, diversas crónicas situaron en el entorno de la villa de Pinto el vórtice o punto medio peninsular.",
      points: [
        {
          title: "Pinto (Punto Céntrico)",
          desc: "Localización ancestral simbolizada por la legendaria arca y el monolito conmemorativo en el corazón urbano del municipio."
        },
        {
          title: "Kilómetro 0 Radial",
          desc: "La Puerta del Sol fija el origen de las seis carreteras nacionales radiales que estructuran territorialmente toda la península."
        }
      ],
      callout: "Dato Histórico: La etimología comúnmente atribuida a Pinto deriva del latín punctum ('punto'), refiriéndose al enclave geográfico donde los agrimensores romanos y cartógrafos árabes establecieron mediciones centrales."
    },
    adminStructure: {
      title: "Estructura Territorial y Administrativa",
      desc: "Desglose piramidal de las competencias y escalas de gobierno que regulan el marco vital de la ciudadanía:",
      levels: [
        {
          num: "1",
          name: "Administración General del Estado",
          desc: "Leyes orgánicas, red nacional viario, seguridad, soberanía y marco fiscal común."
        },
        {
          num: "2",
          name: "Comunidad de Madrid (Autonomía Uniprovincial)",
          desc: "Educación (colegios e institutos IES), sanidad, ordenación comarcal y transporte regional."
        },
        {
          num: "3",
          name: "Ayuntamiento & Comarca Sur",
          desc: "Gestión municipal de Pinto: urbanismo vecinal, parques, servicios de proximidad y barrios residenciales."
        }
      ],
      footerTags: ["Modelo de Autonomías", "Art. 137 C.E."]
    },
    transportNetworks: [
      {
        tag: "A-4",
        tagColor: "bg-red-500 text-white",
        title: "Autovía del Sur (Eje Radial)",
        desc: "Arteria fundamental que enlaza Madrid con Andalucía a través del corredor industrial y residencial de Pinto, Valdemoro y Aranjuez.",
        route: "MADRID • CÓRDOBA • SEVILLA • CÁDIZ",
        icon: "truck"
      },
      {
        tag: "C-3",
        tagColor: "bg-purple-600 text-white",
        title: "Línea C-3 Cercanías Renfe",
        desc: "La histórica vía de Madrid a Aranjuez (segunda línea férrea de la península, inaugurada en 1851), que hoy conecta directamente a los estudiantes y trabajadores de Pinto con Atocha y Sol en menos de 25 minutos.",
        route: "FRECUENCIA PUNTA: 10-15 MIN",
        icon: "train"
      },
      {
        tag: "LOG",
        tagColor: "bg-blue-600 text-white",
        title: "Plataformas Logísticas Sur",
        desc: "Interconexión mediante la M-50, M-506 y la proximidad al corredor de Alta Velocidad (LAV Madrid-Sevilla y Madrid-Levante), convirtiendo la comarca en un nodo logístico estratégico peninsular.",
        route: "CORREDOR LOGÍSTICO METROPOLITANO",
        icon: "box"
      }
    ]
  },

  pinto: {
    badge: "MONOGRAFÍA MUNICIPAL · EJE SUR METROPOLITANO",
    title: "Pinto: Municipio Histórico y Km 0 Simbólico",
    subtitle: "Villa centenaria del sur metropolitano de Madrid, famosa por su Torre de Éboli, su tradición chocolatera y su condición de encrucijada peninsular.",
    stats: [
      { label: "Altitud media", value: "604 m" },
      { label: "Distancia a Puerta del Sol", value: "20,5 km" },
      { label: "Tiempo Cercanías", value: "25 min (C-3)" }
    ],
    eboli: {
      title: "La Torre de Éboli y la Plaza de la Constitución",
      badges: ["PATRIMONIO NACIONAL SIGLO XIV", "25 Metros de Altura"],
      image: "assets/images/torre-eboli.jpg",
      desc: "Monumento emblemático de sillería de piedra caliza blanca erigido en el siglo XIV. Testigo de los avatares cortesanos del Siglo de Oro y símbolo inconfundible del perfil pinteño.",
      historyCard: {
        tag: "CRÓNICA DE LA CORTE (1579)",
        subtitle: "Felipe II vs Princesa de Éboli",
        title: "La Prisión de Doña Ana de Mendoza",
        text: "En la noche del 28 de julio de 1579, por mandato expreso del rey Felipe II tras el asesinato de Juan de Escobedo, la influyente y carismática Princesa de Éboli fue arrestada en Madrid y conducida bajo custodia a esta torre del homenaje, donde permaneció confinada durante seis meses en sus aposentos superiores. Su arquitectura defensiva conservó matacanes almenados, bóvedas de crucería y un recio carácter que domina el centro histórico vecinal."
      },
      monolithCard: {
        title: "El Monolito del Centro Peninsular",
        text: "Situado en la contigua Plaza de la Constitución, el hito escultórico conmemora la arraigada leyenda popular y las tradiciones históricas que sitúan en Pinto el auténtico centro geográfico y simbólico de la Península Ibérica.",
        links: ["Visitas concertadas periódicas", "Ficha Patrimonial"]
      }
    },
    chocolate: {
      title: "Tradición Dulce: Villa del Chocolate",
      subtitle: "Más de siglo y medio de aroma tostado a cacao define la memoria sensorial y laboral de Pinto, cuna de los obradores chocolateros de Madrid.",
      items: [
        {
          tag: "PIONEROS INDUSTRIALES",
          title: "La Colonial y Eureka",
          desc: "Hacia mediados del siglo XIX, la llegada del ferrocarril favoreció el asentamiento de industrias reposteras insignes como La Colonial (fundada en 1854) y posteriormente Chocolates Eureka. La villa abastecía de tabletas de chocolate fino y cacao soluble a los cafés de la Puerta del Sol y las confiterías de toda Castilla.",
          badge: "Patrimonio Fabril activo en el tejido comarcal",
          icon: "factory"
        },
        {
          tag: "PASTELERÍA OFICIAL",
          title: "'Los Ombligos de Pinto'",
          desc: "Creación artesanal registrada que rinde tributo directo a la condición de Pinto como centro geográfico peninsular ('el ombligo de España'). Se elaboran a partir de una delicada masa de hojaldre semicocida con una forma circular característica.",
          details: ["Crema de Avellana", "Chocolate Puro", "Fresa Silvestre"],
          footer: "Ruta de Obradores Tradicionales · 12 Pastelerías",
          icon: "cookie"
        },
        {
          tag: "FERIA ANUAL",
          title: "Feria del Chocolate • Mes de Febrero",
          desc: "Jornadas de catas a ciegas, talleres infantiles de bombonería y la gran chocolatada vecinal con churros en la calle Real.",
          image: "assets/images/chocolates-feria.jpg"
        }
      ]
    },
    monuments: [
      {
        tag: "BARROCO POPULAR",
        name: "Ermita de San Antón",
        century: "Siglo XVII-XVIII",
        location: "Calle San Antón",
        desc: "Nodo devocional y arquitectónico levantado en ladrillo y aparejo toledano. Núcleo de las tradicionales celebraciones populares de bendición de animales en el mes de enero y punto neurálgico del barrio clásico."
      },
      {
        tag: "RENACIMIENTO CASTELLANO",
        name: "Santo Domingo de Silos",
        century: "Siglo XVI",
        location: "Plaza de la Iglesia",
        desc: "Templo parroquial mayor erigido a lo largo de los siglos XVI y XVII. Presenta una noble nave central con capillas laterales, coro alto renacentista y un magnífico retablo mayor de traza clasicista con pinturas atribuidas al taller toledano."
      },
      {
        tag: "PULMÓN VERDE METROPOLITANO",
        name: "Parque Juan Carlos I",
        century: "550.000 m² de superficie",
        location: "Parque Arqueológico Arqueopinto",
        desc: "Extraordinario espacio de 55 hectáreas que alberga un gran lago artificial navegable, circuitos deportivos, áreas botánicas y el Circuito Arqueológico 'Arqueopinto', referente autonómico para el aprendizaje in situ de la prehistoria peninsular."
      }
    ],
    transport: [
      {
        name: "Línea C-3",
        badge: "RED DE CERCANÍAS",
        desc: "Estación céntrica de Pinto con enlace en trasbordos directo a Madrid-Atocha (20 min) y Puerta del Sol (25 min). Frecuencia de paso cada 10-15 minutos en horas punta.",
        route: "Conexión Chamartín - Aranjuez"
      },
      {
        name: "A-4 & M-506",
        badge: "RED VIARIA PRINCIPAL",
        desc: "Salidas inmediatas a la Autovía del Sur (A-4) para acceso directo a Madrid y Andalucía, y a la M-506 para articulación transversal hacia Fuenlabrada, Getafe y Móstoles sin cruzar la capital.",
        route: "Descongestion M-50 en 4 km"
      },
      {
        name: "Interurbanos CRTM",
        badge: "CONSORCIO TRANSPORTES",
        desc: "Líneas metropolitanas diurnas y nocturnas: 421 (Legazpi), 428 (Getafe), 455 (Getafe-Pinto) y 471 (Humanes-Fuenlabrada-Pinto), además de autobuses urbanos circulares.",
        route: "Servicio Búho N401 activo"
      }
    ]
  },

  teneria: {
    badge: "HOME RESIDENCIAL DISTRITO · CÓDIGO POSTAL 28320",
    title: "El Barrio: La Tenería I y II",
    subtitle: "Urbanismo contemporáneo, bulevares arbolados, espacios residenciales y vida comunitaria en el norte de Pinto. El modelo de crecimiento estilístico que une naturaleza, salud y educación de vanguardia.",
    metrics: [
      { value: "1,42", unit: "km²", label: "Superficie Total", note: "Crecimiento planeado" },
      { value: "15.800", unit: "hab.", label: "Población Censada", note: "Perfil joven e intergeneracional" },
      { value: "9,4", unit: "hab./ha", label: "Densidad Demográfica", note: "Concepción abierta y verde" },
      { value: "18,5", unit: "m²", label: "Espacio Verde / Hab", note: "Muy superior a la media de la CAM" }
    ],
    fases: [
      {
        phase: "FASE I (2000-2010)",
        title: "La Tenería I (Consolidada)",
        image: "assets/images/teneria-fase1.jpg",
        desc: "Un tejido residencial armónico y cerrado, caracterizado por manzanas con piscinas interiores, zonas comunes ajardinadas protegidas y un alto indicador de habitabilidad tranquila alrededor de San Gabriel Celaya.",
        points: [
          "Centro de Salud La Tenería: Dotación de cabecera en una arteria principal en Calle Juan Pablo II.",
          "Red de farmacias de guardia y múltiples despachos farmacéuticos.",
          "Proximidad al Parque Gabriel Celaya: Conexión peatonal directa con el corredor ecológico."
        ],
        tags: ["Viviendas con Zonas Comunitarias", "Tráfico Caldeado / Paseos", "Áreas Comerciales"]
      },
      {
        phase: "FASE II (2010-PRESENTE)",
        title: "La Tenería II (Expansión)",
        image: "assets/images/teneria-fase2.jpg",
        desc: "Diseñada bajo los estándares europeos más exigentes de sostenibilidad: súper urbanizaciones tranquilizadas con calificación energética A, climatización por aerotermia y familias jóvenes.",
        points: [
          "Sede del IES Calderón de la Barca: Referente formativo en secundaria, bachillerato y ciclo tecnológico de la comarca sur.",
          "Áreas Infantiles Temáticas: Parques infantiles con suelo elástico y arbolado autóctono.",
          "Urbanizaciones Eficientes: Promociones modernas con paneles fotovoltaicos y puntos de recarga de vehículos eléctricos."
        ],
        tags: ["Sostenible", "Demografía Joven", "Urbanismo Abierto"]
      }
    ],
    boulevards: [
      {
        name: "Calle Juan Pablo II • Columna Cívica",
        desc: "Conecta de este a oeste el corazón del barrio. Sus aceras peatonales de más de cuatro metros de ancho albergan arbolado de sombra (plátanos de sombra y almendros), terrazas gastronómicas y el centro de salud de referencia.",
        stats: [
          { label: "Circulación", value: "Doble Sentido" },
          { label: "Anchura Aceras", value: "Lineal > 4 m" },
          { label: "Arbolado", value: "> 950 ejemplares" }
        ],
        note: "Trazado con zonas de estacionamiento en batería protegidas para una pacificación sensible del tránsito vecinal."
      },
      {
        name: "Calle Manuel de Falla • Eje Escolar",
        desc: "Arteria estructurante de La Tenería II que conduce de forma despejada y segura hacia los equipamientos escolares y las instalaciones del IES Calderón de la Barca.",
        shares: [
          { label: "Aceras", pct: "40%" },
          { label: "Bici", pct: "15%" },
          { label: "Tráfico", pct: "45%" }
        ],
        note: "Rutas escolares seguras con badenes reductores de velocidad e iluminación LED inteligente."
      }
    ],
    greenSpaces: [
      {
        name: "Parque Gabriel Celaya",
        badge: "PULMÓN SOCIAL DE LA TENERÍA",
        image: "assets/images/parque-gabriel-celaya.jpg",
        desc: "El gran punto de encuentro social de los vecinos del distrito. Extensas praderas de césped natural, pérgolas de sombra de madera laminada, áreas de calistenia y modernos juegos infantiles inclusivos homologados.",
        features: ["Pistas Multideporte", "Áreas de Sombra para lectura y tertulias intergeneracionales"]
      },
      {
        name: "Senda Ecológica del Culebro",
        badge: "CONEXIÓN ESPACIO VERDE",
        image: "assets/images/senda-culebro.jpg",
        desc: "Ruta naturalizada que flanquea el barrio hacia el noroeste, enlazando la trama urbana con el curso fluvial del Arroyo Culebro.",
        features: ["Circuito de Running continuo", "Observación de Aves ripícolas y fauna", "Áreas de Esparcimiento Canino"]
      }
    ],
    commerce: [
      {
        cat: "Panaderías & Cafés",
        desc: "Obradores de masa madre fresca, bollería casera, desayunos de barrio y puntos de reunión matutinos en Juan Pablo II.",
        icon: "coffee"
      },
      {
        cat: "Fruterías & Mercado",
        desc: "Fruterías de cercanía con huerta castellana y toledana, carnicerías selectas y pequeñas tiendas de alimentación ecológica.",
        icon: "apple"
      },
      {
        cat: "Salud & Cuidados",
        desc: "Clínicas dentales avanzadas, centros de fisioterapia, ópticas, podología y prestigiosos centros veterinarios.",
        icon: "activity"
      },
      {
        cat: "Terrazas & Gastronomía",
        desc: "Cervecerías modernas, gastrobares de raciones y vermús vespertinos en amplios bulevares peatonales.",
        icon: "utensils"
      }
    ]
  },

  calderon: {
    badge: "ENSEÑANZA SECUNDARIA · BACHILLERATO · FP | LA TENERÍA (PINTO)",
    title: "IES Calderón de la Barca – Pinto",
    subtitle: "Instituto de Educación Secundaria Bilingüe y centro de referencia educativa y tecnológica en La Tenería.",
    meta: {
      address: "Calle Asturias, s/n, La Tenería, 28320 Pinto (Madrid)",
      hours: "Jornada escolar matutina: 08:30 – 15:00 h",
      secretaryHours: "Atención secretaría: 09:00 – 13:00 h (Lunes a Viernes)",
      phone: "+34 91 692 84 90",
      email: "ies.calderondelabarca.pinto@educa.madrid.org"
    },
    heroCard: {
      title: "Hub Informático Comarcal",
      badge: "ECOSISTEMA TECNOLÓGICO",
      image: "assets/images/ies-calderon.jpg",
      desc: "Sede oficial de formación técnica especializada en redes, arquitecturas y desarrollo en el eje sur metropolitano. Bolsa FCT con empresas tecnológicas de Madrid."
    },
    curriculum: [
      {
        stage: "Educación Secundaria Obligatoria (ESO)",
        badge: "ETAPA OBLIGATORIA",
        desc: "Tronco común de 1º a 4º de la ESO enfocado en la madurez intelectual, cívica y científica del alumnado. Programa Bilingüe oficial de la Comunidad de Madrid con refuerzo en competencias matemáticas e idiomas.",
        items: ["Zonas de Refuerzo Instrumental (Matemáticas y Lengua)", "Orientación vocacional durante 3º y 4º curso"],
        tags: ["Cursos: 1º, 2º, 3º, 4º ESO", "Bilingüe Inglés"]
      },
      {
        stage: "Bachillerato",
        badge: "ETAPA POSTOBLIGATORIA",
        desc: "Modalidades orientadas en Ciencias y Tecnología y en Humanidades y Ciencias Sociales para 1º y 2º de Bachillerato, configuradas bajo el marco regulatorio actual con máxima exigencia académica.",
        items: ["Preparación Específica EvAU / Acceso a la Universidad", "Seguimiento tutorial individualizado para elección de carreras"],
        tags: ["Modalidades: CC.TT. / HH.CC.SS.", "Acceso a la Universidad"]
      },
      {
        stage: "Formación Profesional (Informática)",
        badge: "ESPECIALIZACIÓN TÉCNICA",
        desc: "Oferta reglada de la familia de Informática y Comunicaciones con Grado Medio en SMR y Grados Superiores en DAM y DAW, con inserción laboral sobresaliente.",
        items: ["Prácticas FCT en empresas tecnológicas líderes", "Capacitación en desarrollo multiplataforma, cloud y ciberseguridad"],
        tags: ["Títulos: SMR + DAM + DAW", "Convenios FCT"]
      }
    ],
    facilities: [
      {
        title: "Aulas de Informática y Laboratorios Tecnológicos",
        desc: "Múltiples salas de ordenadores de alto rendimiento interconectados en red local Gigabit, servidores de prácticas para ciclos de ASIR y DAM, e instrumental para montaje y diagnóstico hardware.",
        tag: "Fibra óptica de alta velocidad y puestos individuales",
        icon: "monitor"
      },
      {
        title: "Biblioteca y Sala de Lectura con Préstamo Digital",
        desc: "Fondo bibliográfico catalogado con más de 12.000 volúmenes de consulta y literatura juvenil. Integrada en el sistema de préstamo digital y plataforma eBiblio, con terminales de estudio silencioso.",
        tag: "Acceso continuado en recreos y horario vespertino",
        icon: "book-open"
      },
      {
        title: "Pabellón Cubierto y Pistas Deportivas",
        desc: "Pabellón polideportivo cerrado multiusos con vestuarios completos, además de amplias canchas exteriores señalizadas reglamentariamente para fútbol sala, voleibol y baloncesto.",
        tag: "Uso lectivo curricular y ligas escolares en el descanso",
        icon: "trophy"
      },
      {
        title: "Huerto Escolar Ecológico y Espacio Sostenible",
        desc: "Parcela pedagógica al aire libre gestionada colaborativamente por alumnado y docentes de Biología. Dispone de bancales de cultivo biológico, sistema de riego por goteo automatizado y zona de compostaje.",
        tag: "Integrado en la Red Madrileña de Huertos Educativos",
        image: "assets/images/huerto-escolar.jpg",
        icon: "sprout"
      },
      {
        title: "Aula STEAM y Prototipado",
        desc: "Espacio formativo polivalente con impresoras 3D, kits de robótica basada en Arduino y placas micro:bit, estaciones de diseño digital y áreas de montaje para proyectos científicos transversales.",
        tag: "Metodología activa por retos y diseño colaborativo",
        icon: "cpu"
      }
    ],
    projects: [
      {
        name: "Centro Bilingüe en Inglés",
        desc: "Adscripción al programa bilingüe oficial de la Comunidad de Madrid. Asistentes de conversación nativos, exámenes oficiales y proyectos Erasmus+.",
        badge: "Auxiliares Nativos · Inglés Académico",
        icon: "globe"
      },
      {
        name: "Proyectos Ecoescuelas",
        desc: "Compromiso ambiental con auditorías ecológicas dirigidas por el Comité Ambiental escolar. Campañas de reducción plástica, separación en origen y huerto didáctico.",
        badge: "Bandera Verde · Sostenibilidad Activa",
        icon: "leaf"
      },
      {
        name: "AMPA Activa y Orientación",
        desc: "Asociación de familias dinámica y participativa, organizadora de certámenes literarios y artísticos, banco de libros de texto y charlas de ciberseguridad.",
        badge: "Comunidad de Familias · Orientación y Apoyo",
        icon: "heart"
      }
    ]
  },

  naturaleza: {
    badge: "PATRIMONIO NATURAL & RED ACTIVA",
    title: "Naturaleza, Rutas y Deportes al Aire Libre en Pinto",
    subtitle: "Red de corredores biológicos periurbanos, grandes áreas metropolitanas de recreo y una infraestructura consolidada de sendas cicloturistas que unen el casco histórico con el Parque Regional del Sureste y las llanuras esteparias madrileñas.",
    stats: [
      { value: "55", unit: "ha", label: "Parque Juan Carlos I" },
      { value: "12", unit: "km", label: "Sendas Ciclistas" },
      { value: "4", unit: "áreas", label: "Multideporte" }
    ],
    spaces: [
      {
        name: "Parque Municipal Juan Carlos I",
        badge: "PULMÓN METROPOLITANO · 550.000 m²",
        image: "assets/images/parque-juan-carlos-1.jpg",
        desc: "El mayor núcleo vegetal y recreativo de Pinto. Integra una amplia lámina de agua artificial navegable con graderío, circuitos perimetrales de carrera continua sobre tierra, pista reglamentaria de patinaje y amplias praderas que conectan de forma natural con el Parque Arqueológico Gonzalo Arteaga (Arqueopinto).",
        specs: [
          { label: "Superficie", val: "55 Hectáreas" },
          { label: "Lámina Acuática", val: "Lago Artificial" },
          { label: "Museología", val: "Arqueopinto" },
          { label: "Pista", val: "Patinaje Libre" }
        ],
        access: "Acceso principal: C/ Pablo Picasso · Abierto los 365 días"
      },
      {
        name: "Parque Gabriel Celaya",
        badge: "EJE CÍVICO RESIDENCIAL",
        image: "assets/images/mapa-gabriel-celaya.jpg",
        desc: "Centro lúdico y deportivo del ensanche norte de La Tenería. Como no contiene praderas abiertas con drenaje sostenible, áreas de juegos infantiles adaptadas y una de las zonas de calistenia y entrenamiento funcional al aire libre más frecuentadas de la zona sur.",
        tags: ["Praderas Abiertas", "Calistenia Pro", "Parques Infantiles"]
      }
    ],
    routes: [
      {
        name: "Senda Ecológica del Arroyo Culebro",
        tag: "CORREDOR FLUVIAL",
        dist: "5,6 km",
        difficulty: "Llano",
        type: "Tierra compactada",
        desc: "Corredor biológico fluvial de tierra compactada que discurre en el límite septentrional conectando Pinto con Getafe. Permite la observación de avifauna ribereña, álamos blancos y fresnedas, ofreciendo un trazado plano ideal para iniciación al BTT y running sostenido."
      },
      {
        name: "Conexión Parque Regional del Sureste",
        tag: "ESTEPA Y CORTADOS",
        dist: "14,2 km",
        difficulty: "Medio",
        type: "Espacio Red Natura 2000",
        desc: "Itinerario agreste que parte de las cañadas rurales orientales hacia las terrazas yesíferas del valle del Jarama. Alberga retamares, espartales y flora esteparia protegida, sirviendo de refugio a especies ornitológicas como aguiluchos y cernícalos primilla."
      },
      {
        name: "Anillo Verde Urbano y La Tenería",
        tag: "MOVILIDAD ACTIVA",
        dist: "8,8 km",
        difficulty: "Urbano",
        type: "Carril bici segregado",
        desc: "Circunvalación ciclista segregada del tráfico a motor. Enlaza los bulevares arbolados residenciales de La Tenería con los accesos escolares, el Parque Norte y las arterias comerciales, configurando una vía segura para desplazamientos en bicicleta y patinete."
      }
    ],
    facilities: [
      {
        name: "Polideportivo Príncipes de Asturias",
        location: "C/ Sur s/n · Pabellón cubierto & canchas exteriores",
        desc: "Complejo de referencia municipal que alberga pabellón cubierto para baloncesto, balonmano y fútbol sala, complementado con pistas exteriores de pádel, tenis y campos de fútbol de césped artificial."
      },
      {
        name: "Módulos de Calistenia & Workout",
        location: "Pq. Gabriel Celaya / Pq. Norte · Acceso libre sin restricción",
        desc: "Instalaciones fijas de barras paralelas, espalderas y anillas bajo suelo continuo amortiguador. Enclaves destacados en el Parque Norte y la avenida de Juan Pablo II en La Tenería, abiertos 24 horas."
      },
      {
        name: "Rocódromo & Pistas Multiuso",
        location: "Áreas vecinales periféricas · Uso público vecinal gratuito",
        desc: "Espacios urbanos autogestionados que incluyen muros de escalada deportiva en bloque (boulder), canchas vecinales de mini-básquet y pistas de fútbol rápido con cerramiento perimetral de seguridad."
      }
    ]
  },

  gastronomia: {
    badge: "TRADICIÓN DULCE & PINTO DE TAPEO",
    title: "Gastronomía Local y Tradición Repostera: Sabores de Pinto",
    subtitle: "De la cuna del chocolate madrileño con el legado industrial decimonónico de La Colonial y Eureka hasta el ritual castizo del vermú y los torreznos en la Plaza de la Constitución; la vida pinteña convida al paseante a vivir entre el recetario castellano del sur metropolitano y la vibrante oferta cosmopolita de los nuevos bulevares de La Tenería.",
    badges: [
      { label: "HITO DULCE", val: "'Ombligos'" },
      { label: "COMPAÑÍAS", val: "Desde 1854" },
      { label: "DENOMINACIÓN", val: "D.O. Madrid" }
    ],
    heroCard: {
      image: "assets/images/ombligos-pinto.jpg",
      caption: "Marca Protegida: Patente y receta oficial 'Ombligos de Pinto'"
    },
    ombligosDetail: {
      title: "Los 'Ombligos de Pinto': Geografía en Forma de Dulce",
      tag: "RECETA OFICIAL REGISTRADA",
      origin: "Origen: Año 2005 • 20 obradoress oficiales",
      desc: "Inspirado en la consideración histórica y popular de Pinto como el 'ombligo' o centro peninsular de España. Este dulce de autor se elabora con una masa sablé crujiente y mantecada que envuelve un corazón untuoso. Aunque el clásico indiscutible es el de chocolate negro pinteño, los obradores han enriquecido la familia con praliné de avellana tostada y confituras de fresa natural.",
      characteristics: [
        { label: "Masa sablé", val: "Mantequilla y almendra" },
        { label: "Relleno real", val: "Ganache 70% cacao" },
        { label: "Variedades", val: "Fresa & Praliné" }
      ],
      pointsOfSale: [
        "Pastelería Éboli: Plaza de la Constitución, 4 (Obrador pionero)",
        "Pastelería Los Galerones: Calle Vicente María del Pozo (Centro Histórico)",
        "Obrador San José: Calle Egido de la Fuente (Edición conmemorativa de Pascua)"
      ]
    },
    chocHistory: {
      title: "Pinto: La Villa del Chocolate (1854)",
      image: "assets/images/villa-chocolate-1854.jpg",
      desc: "En 1854, la llegada de don Melquiades Sánchez de la Fuente y la fundación de 'La Colonial' inauguraron un vínculo indisoluble. A este marco se sumaría décadas después la mítica fábrica de Chocolates Eureka. Las chimeneas y aromas tostados a corazón nuevo guiaron durante un siglo aquí.",
      fair: {
        title: "Feria Anual del Chocolate • Mes de Febrero",
        desc: "Se celebra cada febrero con motivo de San Valentín y la amistad. Reúne a maestros chocolateros de toda la península, chocolatadas populares, talleres infantiles de chocolatería y visitas a salas de repaso clásico y hornos."
      }
    },
    tapeo: [
      {
        name: "Torreznos Castellanos",
        badge: "BARRA ESPECIAL",
        desc: "Panceta fresca adobada y frita con técnica de doble temperatura: pochado suave y golpe final crujiente con 'corteza de cristal' que acompaña a los mejores vinos de barrica castellanos."
      },
      {
        name: "Oreja al Ajillo & Bravas",
        badge: "TAPA REINA DE CASCO",
        desc: "Cazuelitas de barro hirvientes con oreja troceada dorada a fuego vivo, aromatizada con ajo picado, perejil fresco y un toque picante de salsa brava secreta elaborada en fogón propio."
      },
      {
        name: "D.O. Vinos de Madrid",
        badge: "BODEGAS SAN MARTÍN / ARGANDA",
        desc: "Selección de uvas garnacha tinta y tempranillo de viñedos centenarios de la comarca del Tajo-Jarama. Blancos malvar y tintos jóvenes de equilibrio rotundo."
      }
    ],
    tapaEvent: {
      title: "Ruta Anual de la Tapa de Pinto",
      month: "Abril",
      edition: "Edición 2024",
      desc: "Más de 35 bares y restaurantes compiten cada primavera en Pinto por la codiciada 'Tapa de Oro'. Un evento vecinal repleto de creatividad culinaria y degustaciones a precio popular."
    },
    teneriaDining: {
      title: "Terrazas y Gastronomía Contemporánea en La Tenería",
      desc: "La Tenería I y II representan la evolución urbana gastronómica pinteña: amplias avenidas peatonales, soleadas terrazas durante todo el año, cafés de especialidad y cocina fusión.",
      image: "assets/images/terrazas-teneria.jpg",
      items: [
        {
          name: "Cafeterías de Especialidad & Brunch",
          desc: "Granos arábica de origen seleccionados en tueste natural, bowls de açaí, tartas de autor, tostadas de masa madre y zumos cold-press en bulevares soleados."
        },
        {
          name: "Gastrobares y Cocina Fusión",
          desc: "Hamburguesas de carne madurada, tacos de autor, woks asiáticos, ensaladas templadas de burrata y vinos selectos de corte moderno."
        },
        {
          name: "Heladerías & Pastelería Moderna",
          desc: "Helados artesanales con leche fresca de granja, crepes dulces, gofres belgas y tartas sin gluten elaboradas a diario."
        }
      ]
    },
    directory: [
      {
        name: "Pastelería Éboli",
        category: "pasteleria",
        tag: "OBRADOR CENTENARIO",
        rating: "4.9",
        address: "Plaza de la Constitución, 4 (Centro)",
        hours: "M-D: 08:30 - 14:00 y 17:00 - 20:30 (Lunes cerrado)",
        specialty: "Ombligos oficiales de chocolate negro y praliné",
        price: "€€"
      },
      {
        name: "Mesón Tradicional El Retorno",
        category: "tapeo",
        tag: "TABERNA CASTELLANA",
        rating: "4.7",
        address: "Calle Maestra María del Rosario, 12 (Centro)",
        hours: "X-D: 12:00 - 16:30 / 19:30 - 23:30",
        specialty: "Torreznos crujientes y oreja al ajillo",
        price: "€€"
      },
      {
        name: "Bulevar Lounge & Tapas",
        category: "teneria",
        tag: "TERRAZA EN BULEVAR",
        rating: "4.8",
        address: "Bulevar Juan Pablo II, 18 (La Tenería)",
        hours: "L-D: 10:00 - 00:30 (Ininterrumpido)",
        specialty: "Tapas de autor modernas y cócteles artesanos",
        price: "€€"
      },
      {
        name: "Obrador Los Galerones",
        category: "pasteleria",
        tag: "REPOSTERÍA TRADICIONAL",
        rating: "4.7",
        address: "Calle Vicente María del Pozo, 8 (Centro)",
        hours: "L-S: 08:30 - 14:00 / 17:00 - 20:00",
        specialty: "Pastas de té y ombligos de fresa silvestre",
        price: "€"
      },
      {
        name: "Cervecería de la Villa",
        category: "tapeo",
        tag: "PLAZA MAYOR",
        rating: "4.6",
        address: "Plaza de la Constitución, 1 (Centro)",
        hours: "M-D: 11:30 - 16:00 / 19:00 - 00:00",
        specialty: "Cañas bien tiradas, bravas caseras y jamón ibérico",
        price: "€"
      },
      {
        name: "Café & Crema Tenería",
        category: "teneria",
        tag: "ESPECIALIDAD & DESAYUNO",
        rating: "4.8",
        address: "Calle Manuel de Falla, 14 (La Tenería)",
        hours: "L-V: 07:30 - 20:00 | S-D: 08:30 - 14:00",
        specialty: "Café de especialidad, tostadas de aguacate y brunch",
        price: "€€"
      }
    ]
  },

  directoryPublic: [
    {
      name: "IES Calderón de la Barca",
      category: "Educación",
      address: "Calle Asturias, s/n (La Tenería)",
      tel: "91 692 84 90",
      hours: "08:30 - 15:00 h",
      icon: "graduation-cap"
    },
    {
      name: "Centro de Salud La Tenería",
      category: "Sanidad",
      address: "Calle Juan Pablo II (La Tenería)",
      tel: "91 193 90 22",
      hours: "08:00 - 21:00 h",
      icon: "heart-pulse"
    },
    {
      name: "Ayuntamiento de Pinto",
      category: "Administración",
      address: "Plaza de la Constitución, 1",
      tel: "900 14 / 91 248 37 00",
      hours: "09:00 - 14:00 h",
      icon: "building"
    },
    {
      name: "Policía Local y Emergencias",
      category: "Seguridad",
      address: "Calle Poeta José Hierro",
      tel: "092 / 112",
      hours: "24 Horas",
      icon: "shield"
    }
  ],

  mapPoints: [
    {
      id: "torre-eboli",
      title: "Torre de Éboli & Km 0",
      category: "patrimonio",
      lat: 40.2414,
      lng: -3.6994,
      address: "Plaza de la Constitución / C/ Real",
      desc: "Fortaleza del s. XIV y centro geográfico tradicional peninsular.",
      badge: "Patrimonio",
      image: "assets/images/torre-eboli.jpg"
    },
    {
      id: "ies-calderon",
      title: "IES Calderón de la Barca",
      category: "educacion",
      lat: 40.2492,
      lng: -3.7028,
      address: "Calle Asturias, s/n (La Tenería)",
      desc: "Instituto de Educación Secundaria Bilingüe y FP Informática.",
      badge: "Educación",
      image: "assets/images/ies-calderon.jpg"
    },
    {
      id: "centro-salud-teneria",
      title: "Centro de Salud La Tenería",
      category: "servicios",
      lat: 40.2483,
      lng: -3.7045,
      address: "Calle Juan Pablo II (La Tenería)",
      desc: "Atención primaria de salud para La Tenería I y II.",
      badge: "Salud"
    },
    {
      id: "parque-gabriel-celaya",
      title: "Parque Gabriel Celaya",
      category: "naturaleza",
      lat: 40.2495,
      lng: -3.7060,
      address: "Bulevar Manuel de Falla / Juan Pablo II",
      desc: "Pulmón social con calistenia, juegos infantiles y praderas.",
      badge: "Parque",
      image: "assets/images/parque-gabriel-celaya.jpg"
    },
    {
      id: "parque-juan-carlos-1",
      title: "Parque Municipal Juan Carlos I & Arqueopinto",
      category: "naturaleza",
      lat: 40.2445,
      lng: -3.6890,
      address: "Calle Pablo Picasso",
      desc: "55 hectáreas con lago artificial y parque arqueológico.",
      badge: "Parque Periurbano",
      image: "assets/images/parque-juan-carlos-1.jpg"
    },
    {
      id: "arroyo-culebro",
      title: "Senda Ecológica del Arroyo Culebro",
      category: "naturaleza",
      lat: 40.2550,
      lng: -3.7050,
      address: "Límite norte de La Tenería",
      desc: "Corredor biológico fluvial ideal para BTT, running y paseo.",
      badge: "Sendero",
      image: "assets/images/senda-culebro.jpg"
    },
    {
      id: "cercanias-pinto",
      title: "Estación Cercanías Renfe Pinto (C-3)",
      category: "transporte",
      lat: 40.2410,
      lng: -3.6945,
      address: "Calle Ferrocarril",
      desc: "Conexión directa con Madrid-Atocha (20 min) y Sol (25 min).",
      badge: "Transporte"
    },
    {
      id: "pasteleria-eboli",
      title: "Pastelería Éboli (Ombligos de Pinto)",
      category: "gastronomia",
      lat: 40.2412,
      lng: -3.6992,
      address: "Plaza de la Constitución, 4",
      desc: "Obrador centenario y creador oficial de los Ombligos de Pinto.",
      badge: "Gastronomía",
      image: "assets/images/ombligos-pinto.jpg"
    }
  ]
};
