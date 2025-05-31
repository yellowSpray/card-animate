export interface User {
  id: number,
  name: string,
  pseudo: string,
  avatar: string,
  fonction: string, 
  entreprise: string,
  description: string,
  connect: boolean
}


export const users: User[] = [
  {
    id: 1,
    name: "Alice Dupont",
    pseudo: "@aliceD",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    fonction: "Développeuse Front-end",
    entreprise: "TechNova",
    description: "Passionnée par React et le design UI/UX. Toujours à la recherche de nouvelles idées créatives.",
    connect: true
  },
  {
    id: 2,
    name: "Bruno Martin",
    pseudo: "@brunoM35",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    fonction: "Développeur Full-stack",
    entreprise: "Freelance",
    description: "Fan de JavaScript, contributeur open-source et randonneur à ses heures perdues.",
    connect: false
  },
  {
    id: 3,
    name: "Claire Dubois",
    pseudo: "@claireCode",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    fonction: "Ingénieure Logiciel",
    entreprise: "DevCorp",
    description: "Spécialisée en back-end, mais adore explorer de nouveaux frameworks front-end.",
    connect: false
  },
  {
    id: 4,
    name: "David Lefèvre",
    pseudo: "@davidDev",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    fonction: "Développeur Mobile",
    entreprise: "AppBuilders",
    description: "Créateur d'apps iOS et Android. Accro à Flutter et aux interfaces fluides.",
    connect: true
  },
  {
    id: 5,
    name: "Emma Laurent",
    pseudo: "@emmaUX",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    fonction: "Designer UX/UI",
    entreprise: "PixelStudio",
    description: "Obsédée par l'expérience utilisateur et les micro-interactions.",
    connect: true
  },
  {
    id: 6,
    name: "François Petit",
    pseudo: "@fpetitJS",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    fonction: "Développeur Front-end",
    entreprise: "WebSpark",
    description: "Spécialiste en animations CSS et intégration pixel-perfect.",
    connect: false
  },
  {
    id: 7,
    name: "Gaëlle Marchand",
    pseudo: "@gaelleDev",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    fonction: "Lead Dev",
    entreprise: "SoftBridge",
    description: "Mentore une équipe de 6 développeurs. Adepte de l'agilité.",
    connect: true
  },
  {
    id: 8,
    name: "Hugo Bernard",
    pseudo: "@hugBDev",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    fonction: "Développeur Back-end",
    entreprise: "CodeNest",
    description: "Passionné par Node.js et les API REST. Toujours prêt à optimiser une base de données.",
    connect: false
  },
  {
    id: 9,
    name: "Isabelle Moreau",
    pseudo: "@isaDesign",
    avatar: "https://randomuser.me/api/portraits/women/49.jpg",
    fonction: "Product Designer",
    entreprise: "InnoTech",
    description: "Allie esthétique et fonctionnalité pour des produits centrés utilisateur.",
    connect: true
  },
  {
    id: 10,
    name: "Julien Roche",
    pseudo: "@julienRx",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    fonction: "Développeur Front-end",
    entreprise: "Reactify",
    description: "Fan de React, TailwindCSS et des apps ultra-rapides.",
    connect: true
  },
  {
    id: 11,
    name: "Karine Lemoine",
    pseudo: "@karineL",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    fonction: "Ingénieure QA",
    entreprise: "BugBusters",
    description: "Testeuse dans l’âme. Elle traque les bugs comme personne.",
    connect: false
  },
  {
    id: 12,
    name: "Lucas Meunier",
    pseudo: "@lucasDevOps",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    fonction: "DevOps Engineer",
    entreprise: "CloudForge",
    description: "Automatiser, sécuriser et déployer. Son trio gagnant.",
    connect: false
  },
  {
    id: 13,
    name: "Manon Giraud",
    pseudo: "@manonCode",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    fonction: "Développeuse Full-stack",
    entreprise: "Freelance",
    description: "Travaille sur des projets variés. Polyvalente et curieuse.",
    connect: true
  },
  {
    id: 14,
    name: "Nicolas Lefort",
    pseudo: "@nicoReact",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    fonction: "Développeur React",
    entreprise: "Nextify",
    description: "Pro du SSR et de Next.js. Fait de chaque app une fusée.",
    connect: true
  },
  {
    id: 15,
    name: "Océane Fabre",
    pseudo: "@oceaneUX",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    fonction: "UX Researcher",
    entreprise: "DesignLab",
    description: "Fait parler les utilisateurs pour construire de meilleures expériences.",
    connect: false
  },
  {
    id: 16,
    name: "Pierre Leclerc",
    pseudo: "@pierrotDev",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    fonction: "Développeur JavaScript",
    entreprise: "CodeSphere",
    description: "JS natif, frameworks, librairies... rien ne lui fait peur.",
    connect: false
  },
  {
    id: 17,
    name: "Quentin Vidal",
    pseudo: "@quentinV",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    fonction: "Développeur TypeScript",
    entreprise: "TSWorks",
    description: "Rigoureux sur le typage, il adore écrire du code robuste.",
    connect: true
  },
  {
    id: 18,
    name: "Roxane Mercier",
    pseudo: "@roxUXdev",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    fonction: "Développeuse Web",
    entreprise: "WebFamily",
    description: "Polyvalente, créative et toujours à la recherche de nouveaux défis.",
    connect: true
  },
  {
    id: 19,
    name: "Samuel Caron",
    pseudo: "@samCDev",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    fonction: "Ingénieur Logiciel",
    entreprise: "AlgoTech",
    description: "Spécialiste des algorithmes complexes et des structures de données.",
    connect: false
  },
  {
    id: 20,
    name: "Tina Rolland",
    pseudo: "@tinaFront",
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    fonction: "Développeuse Front-end",
    entreprise: "CodeCrafters",
    description: "CSS Grid, Flexbox et animations n’ont aucun secret pour elle.",
    connect: true
  }
];