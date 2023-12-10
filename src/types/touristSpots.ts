export type TouristSpot = {
  name: string;
  lat: number;
  lng: number;
  category: "permanent" | "festival";
};

export const touristSpots: TouristSpot[] = [
  { 
    name: "성안 올레", 
    lat: 33.514002, 
    lng: 126.527607, 
    category: "festival" 
  },
  {
    name: "서귀포시 성산읍 일출로",
    lat: 33.45450051878536,
    lng: 126.922848997354,
    category: "festival",
  },
  {
    name: "서문 공설시장",
    lat: 33.51147240000002,
    lng: 126.51396555393502,
    category: "festival",
  },
  {
    name: "서귀포농업기술센터",
    lat: 33.28830770018077,
    lng: 126.60305665357198,
    category: "festival",
  },
  {
    name: "신흥2리동백마을",
    lat: 33.32183649999928,
    lng: 126.73976395393652,
    category: "permanent",
  },
];
