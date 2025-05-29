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
  }
];