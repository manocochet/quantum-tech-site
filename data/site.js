/* ════════════════════════════════════════════════════════════════════
   QUANTUM TECHNOLOGIES · PORTAIL OFFICIEL — FICHIER DE DONNÉES UNIQUE
   Tous les textes, chiffres, produits, actualités et chemins de médias.
   ─ Chaque produit / emplacement est un bloc : pour en ajouter un,
     copiez un bloc existant et modifiez-le.
   ─ published: false  → invisible pour le visiteur
                         (visible, étiqueté, en mode édition).
   ─ media: { src: "", label: "…" } → src vide = emplacement vide ;
     l'étiquette n'apparaît qu'en mode édition.
   ════════════════════════════════════════════════════════════════════ */
window.QT_DATA = {

  /* ── IDENTITÉ / INSTITUTIONNEL ─────────────────────────────────── */
  company: {
    legalName: "Quantum Technologies Co., Ltd.",
    brand: "Quantum Tech",
    zh: "量子技术",
    founded: 2005,
    hq: "Quantum Tower, 1888 avenue du Siècle, Nouvelle zone de Pudong, Shanghai 200120, République populaire de Chine",
    registry: "Code unifié de crédit social 91310000MA1QT20050",
    ticker: { market: "SSE STAR", code: "688405", price: "412,60 ¥", change: "+1,84 %" },
    ticker2: { market: "HKEX", code: "2405" },
    press: "presse@quantum-tech.cn",
    ir: "investisseurs@quantum-tech.cn"
  },

  /* ── NAVIGATION ─────────────────────────────────────────────────── */
  utility: ["Carrières", "Investisseurs", "Contact"],
  languages: [{ id: "zh", label: "中文" }, { id: "fr", label: "FR" }, { id: "en", label: "EN" }],

  nav: {
    societe: {
      label: "Société",
      intro: "Une entreprise chinoise fondée en 2005, aujourd'hui présente dans 58 pays.",
      links: ["Profil", "Histoire", "Dirigeants", "Gouvernance", "Implantations", "Éthique & responsabilité", "Programme Guardians"]
    },
    /* Pôles et divisions — À REMPLACER par la liste de la page Divisions validée. */
    poles: [
      { code: "P1", name: "Mobilité", zh: "出行", divisions: ["Automobile", "Transports urbains", "Véhicules spéciaux"], products: ["Longwei", "Longxi Bus", "V-Rail"] },
      { code: "P2", name: "Robotique", zh: "机器人", divisions: ["Robotique civile", "Robotique de sécurité", "Bionique & santé"], products: ["Xiaoban", "Weihe", "Prothèses Hyperion"] },
      { code: "P3", name: "Intelligence", zh: "智能", divisions: ["Intelligence artificielle", "Cybersécurité", "Télécommunications & domotique"], products: ["IA embarquée Quantum", "Hologrammes domestiques"] },
      { code: "P4", name: "Systèmes stratégiques", zh: "战略", divisions: ["Plateformes urbaines", "Programmes d'État"], products: ["COSMOS", "Programme Guardians"] }
    ],
    plateformes: [
      { name: "COSMOS", full: "City Operating System for Metropolitan Organizational Structures", line: "Le système d'exploitation des métropoles.", published: true, media: { src: "media/posters/couches.png", label: "COSMOS · VIGNETTE MENU · 16:9" } },
      { name: "Plateforme IA 02", full: "", line: "", published: false, media: { src: "", label: "PLATEFORME 02 · VIGNETTE · 16:9" } },
      { name: "Plateforme IA 03", full: "", line: "", published: false, media: { src: "", label: "PLATEFORME 03 · VIGNETTE · 16:9" } },
      { name: "Plateforme IA 04", full: "", line: "", published: false, media: { src: "", label: "PLATEFORME 04 · VIGNETTE · 16:9" } }
    ],
    actualites: ["Communiqués", "Rapports", "Événements", "Médiathèque"]
  },

  /* ── CATALOGUE : 3 UNIVERS ──────────────────────────────────────── */
  universes: [
    { id: "mobilite", code: "01", name: "Mobilité", zh: "出行", line: "Se déplacer seul, en famille ou à l'échelle d'une ville.",
      categories: ["Automobiles", "Bus & camping-car", "V-Rail"], featured: "longwei" },
    { id: "securite", code: "02", name: "Sécurité", zh: "安全", line: "Protéger les personnes, les biens et l'espace public.",
      categories: ["Véhicules blindés", "Robotique des forces de l'ordre"], featured: "weihe" },
    { id: "quotidien", code: "03", name: "Vie quotidienne", zh: "生活", line: "Une présence attentive, chaque jour, à la maison.",
      categories: ["Robotique civile"], featured: "xiaoban" }
  ],

  /* ── PRODUITS (index) — fiches complètes en phases 2 à 7 ──────────
     audience: public | autorisation | accreditation | collectivite   */
  products: [
    { id: "longwei", name: "Longwei", zh: "龙威", sens: "La majesté du dragon", universe: "mobilite", category: "Automobiles", type: "SUV / crossover électrique", audience: "public", priceUSD: 70000, priceCNY: 498000, published: true, media: { src: "media/raw/car/vA.png", label: "LONGWEI · IMAGE 1/6 · 16:9 · route" } },
    { id: "jiahe", name: "Jiahe", zh: "嘉和", sens: "Harmonie et beauté", universe: "mobilite", category: "Automobiles", type: "Berline électrique", audience: "public", published: true, media: { src: "media/raw/car/v06.png", label: "JIAHE · IMAGE 1/6" } },
    { id: "jiazun", name: "Jiazun", zh: "嘉尊", sens: "L'excellence souveraine", universe: "mobilite", category: "Automobiles", type: "Limousine", audience: "public", published: true, media: { src: "media/raw/car/v04.png", label: "JIAZUN · IMAGE 1/6" } },
    { id: "jiafeng", name: "Jiafeng", zh: "嘉锋", sens: "Le tranchant de l'excellence", universe: "mobilite", category: "Automobiles", type: "Coupé GT", audience: "public", published: true, media: { src: "media/raw/car/v14.png", label: "JIAFENG · IMAGE 1/6" } },
    { id: "longyue", name: "Longyue", zh: "龙跃", sens: "Le dragon s'élance", universe: "mobilite", category: "Automobiles", type: "4x4 tout-terrain", audience: "public", published: true, media: { src: "media/raw/car/v36.png", label: "LONGYUE · IMAGE 1/6" } },
    { id: "anle", name: "Anle", zh: "安乐", sens: "Paix et bonheur", universe: "mobilite", category: "Automobiles", type: "Citadine", audience: "public", published: true, media: { src: "media/raw/car/v19.png", label: "ANLE · IMAGE 1/6" } },
    { id: "anjia", name: "Anjia", zh: "安家", sens: "Le foyer serein", universe: "mobilite", category: "Automobiles", type: "Monospace familial", audience: "public", published: true, media: { src: "media/raw/car/v29.png", label: "ANJIA · IMAGE 1/6" } },
    { id: "anxing", name: "Anxing", zh: "安行", sens: "Voyager en paix", universe: "mobilite", category: "Automobiles", type: "Navette autonome", audience: "public", published: true, media: { src: "media/raw/car/v41.png", label: "ANXING · IMAGE 1/6" } },
    { id: "longxi", name: "Longxi Bus", zh: "龙熙", sens: "L'éclat du dragon", universe: "mobilite", category: "Bus & camping-car", type: "Bus articulé", audience: "collectivite", published: true, media: { src: "media/raw/bus/b1.png", label: "LONGXI · IMAGE 1/6" } },
    { id: "longyou", name: "Longyou", zh: "龙游", sens: "Le dragon voyage", universe: "mobilite", category: "Bus & camping-car", type: "Camping-car tout-terrain", audience: "public", published: true, media: { src: "media/raw/camper/c3.png", label: "LONGYOU · IMAGE 1/6" } },
    { id: "vrail", name: "V-Rail", zh: "天轨", sens: "Le rail céleste", universe: "mobilite", category: "V-Rail", type: "Métro suspendu", audience: "collectivite", published: true, media: { src: "media/raw/vrail/t1.png", label: "V-RAIL · IMAGE 1/6" } },

    { id: "xuanjia", name: "Xuanjia", zh: "玄甲", sens: "L'armure noire", universe: "securite", category: "Véhicules blindés", type: "Blindé civil", audience: "autorisation", published: true, media: { src: "", label: "XUANJIA · IMAGE 1/6 · 16:9 · 3/4 avant" } },
    { id: "xuanying", name: "Xuanying", zh: "玄影", sens: "L'ombre noire", universe: "securite", category: "Véhicules blindés", type: "Blindé civil", audience: "autorisation", published: true, media: { src: "", label: "XUANYING · IMAGE 1/6 · 16:9 · 3/4 avant" } },
    { id: "dunwei", name: "Dunwei", zh: "盾卫", sens: "Le bouclier gardien", universe: "securite", category: "Véhicules blindés", type: "Blindé d'intervention", audience: "accreditation", published: true, media: { src: "media/raw/armored/a1.png", label: "DUNWEI · IMAGE 1/6" } },
    { id: "blinde-04", name: "Emplacement blindé 04", universe: "securite", category: "Véhicules blindés", published: false, media: { src: "", label: "BLINDÉ 04 · IMAGE 1/6" } },
    { id: "blinde-05", name: "Emplacement blindé 05", universe: "securite", category: "Véhicules blindés", published: false, media: { src: "", label: "BLINDÉ 05 · IMAGE 1/6" } },
    { id: "weihe", name: "Weihe", zh: "维和", sens: "Le maintien de la paix", universe: "securite", category: "Robotique des forces de l'ordre", type: "Droïde de patrouille", audience: "accreditation", published: true, media: { src: "media/raw/police/r02.png", label: "WEIHE · IMAGE 1/4" } },
    { id: "yingwei", name: "Yingwei", zh: "影卫", sens: "La garde de l'ombre", universe: "securite", category: "Robotique des forces de l'ordre", type: "Unité forces spéciales", audience: "accreditation", published: true, media: { src: "media/raw/police/r07.png", label: "YINGWEI · IMAGE 1/4" } },
    { id: "tiewei", name: "Tiewei", zh: "铁卫", sens: "La garde de fer", universe: "securite", category: "Robotique des forces de l'ordre", type: "Unité d'intervention lourde", audience: "accreditation", published: true, media: { src: "media/raw/police/r09.png", label: "TIEWEI · IMAGE 1/4" } },
    { id: "robot-fo-04", name: "Emplacement robot 04", universe: "securite", category: "Robotique des forces de l'ordre", published: false, media: { src: "", label: "ROBOT FO 04 · IMAGE 1/4" } },

    { id: "xiaoban", name: "Xiaoban", zh: "小伴", sens: "Le petit compagnon", universe: "quotidien", category: "Robotique civile", type: "Robot domestique", audience: "public", bestseller: true, priceUSD: 4900, priceCNY: 34900, published: true, media: { src: "media/raw/civil/h2.png", label: "XIAOBAN · IMAGE 1/6 · fond neutre" } },
    { id: "civil-02", name: "Emplacement civil 02", universe: "quotidien", category: "Robotique civile", published: false, media: { src: "", label: "ROBOT CIVIL 02 · IMAGE 1/6" } },
    { id: "civil-03", name: "Emplacement civil 03", universe: "quotidien", category: "Robotique civile", published: false, media: { src: "", label: "ROBOT CIVIL 03 · IMAGE 1/6" } }
  ],

  /* ── ACCUEIL ────────────────────────────────────────────────────── */
  home: {
    hero: {
      /* Vidéo de fond plein écran. Déposez le fichier à ce chemin. */
      video: "media/video/PAL_HERO_REEL_v2.mp4",
      poster: "",
      mobile: "media/raw/car/v14.png",
      label: "ACCUEIL · VIDÉO HERO · 16:9 · PAL_HERO_REEL_v2.mp4",
      darken: 0.55,
      title: { fr: "Façonner l'avenir.", en: "We engineer the next state of humanity.", zh: "塑造未来" },
      subtitle: { fr: "L'intelligence qui fait vivre les villes, et ceux qui les habitent.", en: "The intelligence that keeps cities, and the people in them, alive.", zh: "让城市与城市中的人，生生不息的智能。" },
      cta: { fr: "Entrer", en: "Enter", zh: "进入" }
    },
    manifesto: "Depuis 2005, nous concevons l'intelligence qui relie les machines, les villes et les personnes.",
    figures: [
      { value: "480", count: 480, unit: "Md$", label: "Chiffre d'affaires annuel" },
      { value: "250 000", count: 250000, unit: "", label: "Collaborateurs" },
      { value: "58", count: 58, unit: "", label: "Pays partenaires" },
      { value: "520", count: 520, unit: "", label: "Développements majeurs" }
    ],
    cosmosLines: [
      "Une ville produit chaque seconde des millions de signaux.",
      "COSMOS les relie en un seul système, en temps réel.",
      "Transports, énergie, infrastructures, sécurité : la ville se pilote enfin."
    ],
    guardians: { media: { src: "", label: "GUARDIANS · GRAND VISUEL · 21:9 · Gardien en situation" }, line: "Partenaire de la GDO depuis 2021." },
    closing: { line: "Le progrès n'a de valeur que s'il rend chaque jour plus léger.", cta: "Rejoindre Quantum Tech", sub: "1 200 postes ouverts dans 31 pays." }
  },

  /* ── INTELLIGENCE ARTIFICIELLE / PLATEFORMES ───────────────────── */
  intelligence: {
    pillars: [
      { code: "01", title: "Percevoir", text: "Caméras, LiDAR, radars et capteurs urbains : chaque système Quantum lit son environnement en continu." },
      { code: "02", title: "Comprendre", text: "Les modèles Quantum fusionnent ces signaux pour reconnaître des situations, pas seulement des objets." },
      { code: "03", title: "Décider", text: "Chaque décision est calculée localement en quelques millisecondes, puis partagée avec le réseau." },
      { code: "04", title: "Coopérer", text: "Véhicules, robots et villes échangent leurs intentions pour agir ensemble, de façon plus sûre." }
    ],
    figures: [
      { value: "10–12 %", label: "du budget annuel consacré à l'IA et aux hologrammes domestiques" },
      { value: "25 %", label: "du budget annuel consacré à la R&D en robotique" },
      { value: "15 %", label: "du budget consacré à la cybersécurité et à la surveillance" }
    ],
    /* L'IA embarquée Quantum : la même intelligence dans tous les produits. */
    embedded: [
      { name: "Automobiles", line: "Conduite autonome et communication entre véhicules.", media: { src: "media/raw/car/v13.png", label: "IA · AUTOMOBILE · 4:3" } },
      { name: "Robotique civile", line: "Apprentissage des habitudes du foyer, sans quitter la maison.", media: { src: "media/raw/civil/h6.png", label: "IA · ROBOT CIVIL · 4:3" } },
      { name: "Sécurité", line: "Reconnaissance, dialogue et assistance dans l'espace public.", media: { src: "media/raw/police/r04.png", label: "IA · SÉCURITÉ · 4:3" } }
    ],
    /* Plateformes : COSMOS + 3 emplacements pour vos futures IA */
    platforms: [
      { id: "cosmos", name: "COSMOS", zh: "宇宙", line: "Le système d'exploitation des métropoles.", status: "En service · 2039", published: true },
      { id: "ia-02", name: "Plateforme IA 02", zh: "", line: "", status: "", published: false },
      { id: "ia-03", name: "Plateforme IA 03", zh: "", line: "", status: "", published: false },
      { id: "ia-04", name: "Plateforme IA 04", zh: "", line: "", status: "", published: false }
    ],
    ethics: [
      "Les données personnelles sont traitées au plus près de leur source et ne sont jamais revendues.",
      "Chaque décision d'un système Quantum peut être retracée et expliquée.",
      "Une autorité humaine reste responsable de toute action sur l'espace public."
    ]
  },

  /* ── COSMOS ─────────────────────────────────────────────────────── */
  cosmos: {
    full: "City Operating System for Metropolitan Organizational Structures",
    intro: "COSMOS intègre l'ensemble des infrastructures, des systèmes électroniques et des installations de sécurité publique d'une métropole dans un seul système d'exploitation.",
    layers: [
      { code: "01", name: "Circulation & transports", text: "Feux, bus, V-Rail et véhicules autonomes coordonnés en temps réel. Les flux sont anticipés avant que la congestion n'apparaisse.", metric: "−27 %", metricLabel: "temps de trajet moyen aux heures de pointe" },
      { code: "02", name: "Énergie", text: "Production, stockage et consommation équilibrés quartier par quartier. Chaque bâtiment devient un acteur du réseau.", metric: "−18 %", metricLabel: "consommation électrique du réseau public" },
      { code: "03", name: "Infrastructures", text: "Ponts, réseaux d'eau, collecte des déchets : la maintenance se planifie avant la panne grâce au jumeau numérique de la ville.", metric: "−41 %", metricLabel: "interventions d'urgence sur les réseaux" },
      { code: "04", name: "Capteurs & caméras", text: "Des millions de capteurs et de caméras haute définition alimentent une lecture continue et anonymisée de la ville.", metric: "12 M", metricLabel: "capteurs connectés à Shanghai" },
      { code: "05", name: "Sécurité publique", text: "Les données analysées assistent les autorités compétentes dans leur mission de maintien de l'ordre.", metric: "−20 à −35 %", metricLabel: "délinquance dans les grandes municipalités chinoises" }
    ],
    cities: [
      { city: "Shanghai", since: "2039", status: "En service" },
      { city: "Beijing", since: "2039", status: "En service" },
      { city: "Chongqing", since: "2040", status: "En service" },
      { city: "Shenzhen", since: "2041", status: "Déploiement" },
      { city: "Singapour", since: "2041", status: "Contrat signé" },
      { city: "Dubaï", since: "2042", status: "Étude" }
    ],
    live: [
      { label: "Véhicules en circulation", value: 2418306, unit: "" },
      { label: "Rames V-Rail en service", value: 412, unit: "" },
      { label: "Charge du réseau électrique", value: 71.4, unit: "%", dec: 1 },
      { label: "Incidents en cours de traitement", value: 37, unit: "" }
    ]
  },

  /* ── SOCIÉTÉ ────────────────────────────────────────────────────── */
  history: [
    { year: "2005", title: "Fondation", text: "Alexander Chen fonde Quantum Technologie avec une ambition : façonner l'avenir par la robotique, l'informatique et l'intelligence artificielle." },
    { year: "2010", title: "Informatique et cybersécurité", text: "Quantum Tech s'impose en cybersécurité, lance ses premières intelligences artificielles et travaille avec de grands groupes du numérique." },
    { year: "2021", title: "Initiative Guardians", text: "Face à la menace des Léviathans, Quantum Tech rejoint l'initiative Guardians. L'État chinois investit massivement dans l'entreprise." },
    { year: "2028", title: "Véhicules autonomes", text: "Présentation des premières voitures et des premiers bus autonomes : LiDAR, caméras haute résolution, radars et communication entre véhicules." },
    { year: "2035", title: "Alliance avec Hyperion Laboratories", text: "Prothèses, implants médicaux et robotique d'assistance : l'IA chinoise rencontre la médecine régénérative russe." },
    { year: "2037", title: "Droïdes policiers", text: "Les premiers droïdes policiers bipèdes patrouillent dans les grandes villes chinoises et renseignent les citoyens." },
    { year: "2039", title: "COSMOS", text: "Lancement du système d'exploitation des métropoles, d'abord à Shanghai et Beijing." },
    { year: "2040", title: "Leader mondial", text: "Quantum Tech est l'un des leaders mondiaux de la technologie informatique et robotique." }
  ],
  leaders: [
    { name: "Alexander Chen", zh: "陈亚历", role: "Fondateur, président-directeur général", text: "Entrepreneur visionnaire, il dirige Quantum Tech depuis sa fondation avec un objectif : éradiquer la pénibilité et ouvrir la cinquième révolution industrielle.",
      bio: "Visionnaire et excentrique, souvent comparé à Tony Stark pour son audace et son amour de la haute technologie, un rapprochement qu'il trouve fort sympathique. Sous sa direction, Quantum Tech est devenue un empire financier 2.0.",
      quote: "Révolutionner la vie quotidienne des citoyens du globe.",
      media: { src: "media/leaders/chen.png", label: "PORTRAIT · ALEXANDER CHEN · 4:5" } },
    { name: "Dr Li Qiang", zh: "李强", role: "Directeur scientifique et de l'ingénierie", text: "Physicien quantique, roboticien et spécialiste de l'IA, il conduit l'ensemble des programmes de recherche du groupe.", media: { src: "media/leaders/li.png", label: "PORTRAIT · LI QIANG · 4:5" } },
    { name: "Zhou Mei-Ling", zh: "周美玲", role: "Directrice de la sécurité", text: "Ancienne officière de police de haut rang, elle assure depuis quinze ans la protection du groupe et de ses actifs.", media: { src: "media/leaders/zhou.png", label: "PORTRAIT · ZHOU MEI-LING · 4:5" } }
  ],
  ownership: [
    { label: "État chinois", value: 50 },
    { label: "Investisseurs institutionnels", value: 31 },
    { label: "Flottant", value: 12 },
    { label: "Fondateur et dirigeants", value: 7 }
  ],
  commitments: [
    { value: "30–45 M$", label: "versés chaque année à des initiatives caritatives et à des organisations à but non lucratif" },
    { value: "520", label: "développements majeurs depuis la fondation" },
    { value: "N° 1", label: "partenaire d'Hyperion Laboratories" }
  ],

  /* ── GUARDIANS ──────────────────────────────────────────────────── */
  guardiansPage: {
    intro: "En 2021, face à la menace des Léviathans, Quantum Technologies a été appelée à contribuer à l'initiative Guardians : concevoir des robots géants capables de protéger l'humanité.",
    chapters: [
      { code: "I", title: "Un appel", text: "La GDO sollicite l'expertise de Quantum Tech en robotique et en intelligence artificielle pour le programme des Gardiens." },
      { code: "II", title: "Une contribution", text: "Systèmes de contrôle, intelligence embarquée, structures : les apports du groupe permettent des Gardiens plus puissants et plus sophistiqués." },
      { code: "III", title: "Un engagement", text: "Avec le soutien de l'État chinois, Quantum Tech poursuit son rôle de partenaire industriel du programme." }
    ],
    media: [
      { src: "", label: "GUARDIANS · IMAGE 1 · 21:9 · Gardien, vue d'ensemble" },
      { src: "", label: "GUARDIANS · IMAGE 2 · 4:5 · détail" },
      { src: "", label: "GUARDIANS · IMAGE 3 · 4:5 · atelier d'assemblage" }
    ]
  },

  /* ── PRÉSENCE MONDIALE (lon, lat) ───────────────────────────────── */
  sites: [
    { city: "Shanghai", country: "Chine", type: "Siège social", lon: 121.47, lat: 31.23, main: true },
    { city: "Beijing", country: "Chine", type: "Recherche & Développement", lon: 116.4, lat: 39.9 },
    { city: "Shenzhen", country: "Chine", type: "Production · Robotique", lon: 114.06, lat: 22.54 },
    { city: "Chongqing", country: "Chine", type: "Production · Mobilité", lon: 106.55, lat: 29.56 },
    { city: "Hong Kong", country: "Chine", type: "Finance · HKEX", lon: 114.17, lat: 22.32 },
    { city: "Tokyo", country: "Japon", type: "Bureau régional", lon: 139.69, lat: 35.69 },
    { city: "Séoul", country: "Corée du Sud", type: "Recherche · Télécoms", lon: 126.98, lat: 37.57 },
    { city: "Singapour", country: "Singapour", type: "Siège Asie du Sud-Est", lon: 103.82, lat: 1.35 },
    { city: "Jakarta", country: "Indonésie", type: "Production · Bus", lon: 106.85, lat: -6.21 },
    { city: "Mumbai", country: "Inde", type: "Bureau régional", lon: 72.88, lat: 19.08 },
    { city: "Dubaï", country: "Émirats arabes unis", type: "COSMOS · Moyen-Orient", lon: 55.27, lat: 25.2 },
    { city: "Moscou", country: "Russie", type: "Partenariat Hyperion Laboratories", lon: 37.62, lat: 55.76 },
    { city: "Munich", country: "Allemagne", type: "Recherche · Mobilité", lon: 11.58, lat: 48.14 },
    { city: "Paris", country: "France", type: "Bureau Europe", lon: 2.35, lat: 48.86 },
    { city: "Nairobi", country: "Kenya", type: "Bureau Afrique", lon: 36.82, lat: -1.29 },
    { city: "São Paulo", country: "Brésil", type: "Bureau Amérique latine", lon: -46.63, lat: -23.55 },
    { city: "Sydney", country: "Australie", type: "Bureau Océanie", lon: 151.21, lat: -33.87 }
  ],

  /* ── ACTUALITÉS (les 3 premières s'affichent sur l'accueil) ─────── */
  news: [
    { date: "28 septembre 2040", type: "Communiqué", title: "COSMOS entre en service à Chongqing, troisième métropole entièrement connectée", media: { src: "media/posters/couches.png", label: "ACTU · 4:3" } },
    { date: "17 septembre 2040", type: "Événement", title: "Salon de Shanghai : première mondiale du camping-car Longyou", media: { src: "media/raw/camper/c3.png", label: "ACTU · 4:3" } },
    { date: "4 septembre 2040", type: "Rapport", title: "Rapport semestriel 2040 : la robotique civile dépasse 20 % du chiffre d'affaires", media: { src: "media/raw/civil/h6.png", label: "ACTU · 4:3" } },
    { date: "22 août 2040", type: "Communiqué", title: "Quantum Tech et Hyperion Laboratories prolongent leur alliance jusqu'en 2050", media: { src: "", label: "ACTU · 4:3" } },
    { date: "9 août 2040", type: "Communiqué", title: "Les droïdes Weihe dépassent les 40 000 unités en service dans 26 villes", media: { src: "media/raw/police/r04.png", label: "ACTU · 4:3" } },
    { date: "30 juillet 2040", type: "Événement", title: "Journée investisseurs 2040 : la stratégie Intelligence à l'horizon 2045", media: { src: "", label: "ACTU · 4:3" } },
    { date: "15 juillet 2040", type: "Médiathèque", title: "Film : une journée à bord du V-Rail de Shanghai", media: { src: "media/raw/vrail/t3.png", label: "ACTU · 4:3" } },
    { date: "1er juillet 2040", type: "Rapport", title: "Rapport éthique & responsabilité 2039", media: { src: "", label: "ACTU · 4:3" } }
  ],

  /* ── PIED DE PAGE ───────────────────────────────────────────────── */
  footer: [
    { title: "Société", links: [["Profil", "Societe.dc.html#profil"], ["Histoire", "Societe.dc.html#histoire"], ["Dirigeants", "Societe.dc.html#dirigeants"], ["Gouvernance", "Societe.dc.html#gouvernance"], ["Implantations", "Societe.dc.html#implantations"], ["Programme Guardians", "Guardians.dc.html"]] },
    { title: "Intelligence", links: [["COSMOS", "COSMOS.dc.html"], ["IA embarquée", "Intelligence.dc.html#embarquee"], ["Éthique de l'IA", "Intelligence.dc.html#ethique"], ["Divisions", "Divisions.dc.html"]] },
    { title: "Catalogue", links: [["Mobilité", "Catalogue.dc.html?u=mobilite"], ["Sécurité", "Catalogue.dc.html?u=securite"], ["Vie quotidienne", "Catalogue.dc.html?u=quotidien"], ["Trouver un point de vente", "Contact.dc.html?s=vente"]] },
    { title: "Investisseurs", links: [["Cours de l'action", "Investisseurs.dc.html#cours"], ["Résultats financiers", "Investisseurs.dc.html#rapports"], ["Actionnariat", "Investisseurs.dc.html#actionnariat"], ["Contact investisseurs", "Contact.dc.html?s=investisseurs"]] }
  ],
  legal: [["Mentions légales", "Legal.dc.html#mentions"], ["Confidentialité", "Legal.dc.html#confidentialite"], ["Paramètres des cookies", "#cookies"], ["Accessibilité", "Legal.dc.html#accessibilite"], ["Plan du site", "Legal.dc.html#plan"]]
};
/* Utilitaires partagés (ne pas modifier) */
window.QT_UTIL = {
  q: function (k) { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } },
  productHref: function (id) { return 'Produit.dc.html?id=' + id; },
  articleHref: function (i) { return 'Article.dc.html?i=' + i; },
  fmt: function (n) { return n.toLocaleString('fr-FR').replace(/\u202f|\u00a0/g, ' '); },
  access: function (p) {
    var f = window.QT_UTIL.fmt;
    return ({
      public: p.priceUSD ? 'À partir de ' + f(p.priceUSD) + ' $ · ' + f(p.priceCNY) + ' ¥' : 'Configurer · Réserver un essai',
      autorisation: 'Vente soumise à autorisation',
      accreditation: 'Réservé aux forces de sécurité accréditées',
      collectivite: 'Contacter la division Transports urbains'
    })[p.audience] || '';
  },
  cta: function (p) {
    return ({ public: 'Configurer', autorisation: 'Demander une étude personnalisée', accreditation: "Demande d'accréditation", collectivite: 'Contacter la division' })[p.audience] || 'Découvrir';
  }
};
