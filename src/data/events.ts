export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  code: string;
  image: string;
  description: string;
};

export const events: EventItem[] = [
  {
    id: "1",
    title: "Festival de Tecnologia 2026",
    date: "25/04/2026",
    time: "19:00 - 23:00",
    location: "São Paulo - SP",
    code: "TEC2026A1",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    description:
      "Um evento incrível com palestras, workshops e networking com profissionais da área de tecnologia.",
  },
  {
    id: "2",
    title: "Show de Rock",
    date: "28/04/2026",
    time: "20:00 - 01:00",
    location: "Rio de Janeiro - RJ",
    code: "ROCK2026B2",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    description:
      "Uma noite especial com bandas ao vivo e muita música para os fãs de rock.",
  },
  {
    id: "3",
    title: "Feira de Startups",
    date: "02/05/2026",
    time: "10:00 - 18:00",
    location: "Belo Horizonte - MG",
    code: "START2026C3",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    description:
      "Evento para networking, inovação e conexão entre empreendedores e investidores.",
  },
];