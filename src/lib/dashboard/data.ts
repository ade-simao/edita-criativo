import {
  Eye,
  MousePointerClick,
  MousePointerSquareDashed,
  TrendingUp,
} from "lucide-react";

export const dashboardData = {
  stats: [
    {
      title: "Visitantes",
      value: "2.314",
      change: 12.8,
      icon: Eye,
    },
    {
      title: "Cliques",
      value: "421",
      change: 8.2,
      icon: MousePointerClick,
    },
    {
      title: "Conversões",
      value: "37",
      change: 5.4,
      icon: TrendingUp,
    },
    {
      title: "CTR",
      value: "8,8%",
      change: -1.3,
      icon: MousePointerSquareDashed,
    },
  ],

  visitors: [
    { day: "Seg", visits: 280 },
    { day: "Ter", visits: 340 },
    { day: "Qua", visits: 390 },
    { day: "Qui", visits: 510 },
    { day: "Sex", visits: 620 },
    { day: "Sáb", visits: 480 },
    { day: "Dom", visits: 350 },
  ],

  ctas: [
    {
      name: "Hero",
      clicks: 126,
    },
    {
      name: "Planos",
      clicks: 88,
    },
    {
      name: "Navbar",
      clicks: 61,
    },
    {
      name: "CTA Final",
      clicks: 44,
    },
  ],

  recentEvents: [
    {
      event: "Clique no WhatsApp",
      page: "Hero",
      time: "há 2 minutos",
    },
    {
      event: "Visualização do Portfólio",
      page: "Portfólio",
      time: "há 6 minutos",
    },
    {
      event: "Plano selecionado",
      page: "Planos",
      time: "há 12 minutos",
    },
    {
      event: "FAQ aberto",
      page: "Perguntas Frequentes",
      time: "há 19 minutos",
    },
  ],

  worldMap: [
    {
      country: "Angola",
      users: 1542,
    },
    {
      country: "Portugal",
      users: 487,
    },
    {
      country: "Brasil",
      users: 203,
    },
  ],

  visitorsByCountry: [
    {
      country: "Angola",
      city: "Luanda",
      visitors: 241,
      lat: -8.83,
      lng: 13.24,
    },
    {
      country: "Portugal",
      city: "Lisboa",
      visitors: 163,
      lat: 38.72,
      lng: -9.13,
    },
    {
      country: "Brasil",
      city: "São Paulo",
      visitors: 132,
      lat: -23.55,
      lng: -46.63,
    },
    {
      country: "Moçambique",
      city: "Maputo",
      visitors: 84,
      lat: -25.96,
      lng: 32.58,
    },
  ],
};
