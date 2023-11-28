"use client"

import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from 'react';

type TouristSpot = {
  name: string;
  lat: number;
  lng: number;
  category: 'permanent' | 'festival';
};

const touristSpots: TouristSpot[] = [
  { name: '성안 올레', lat: 33.514002, lng: 126.527607, category: 'festival' },
  { name: '서귀포시 성산읍 일출로', lat: 33.45450051878536, lng: 126.922848997354, category: 'festival' },
  { name: '서문 공설시장', lat: 33.51147240000002, lng: 126.51396555393502, category: 'festival' },
  { name: '서귀포농업기술센터', lat: 33.28830770018077, lng: 126.60305665357198, category: 'festival' },
  { name: '신흥2리동백마을ㅎㅎㅎ', lat: 33.32183649999928, lng: 126.73976395393652, category: 'permanent' },
];

export default function() {
  const permanentMarkerImageSrc = '/Danielle1.png';
  const festivalMarkerImageSrc = '/Hanni1.png';

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=8d1576d5892fe2db039d7947d8ee3841&autoload=false';
    document.head.appendChild(script);
    
    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("jeju-map"); 
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
          level: 8, 
        };
        const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(newMap);

        const newMarkers = touristSpots.map((spot) => {
          const imageSize = new window.kakao.maps.Size(24, 35);
          const imageSrc = spot.category === 'permanent' ? permanentMarkerImageSrc : festivalMarkerImageSrc;
          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

          const markerPosition = new window.kakao.maps.LatLng(spot.lat, spot.lng);
          const marker = new window.kakao.maps.Marker({
            map: newMap,
            position: markerPosition,
            title: spot.name,
            image: markerImage
          });

          return { marker, category: spot.category };
        });
        setMarkers(newMarkers);
      });
    });
  }, []);

  const showCategory = (category) => {
    setVisibleCategory(category);
    const bounds = new window.kakao.maps.LatLngBounds();

    markers.forEach(({ marker, category: markerCategory }) => {
      if (markerCategory === category) {
        marker.setMap(map); // 마커 표시
        bounds.extend(marker.getPosition());
      } else {
        marker.setMap(null); // 마커 숨기기
      }
    });

    if (map && !bounds.isEmpty()) {
      map.setBounds(bounds); // 지도 범위를 마커가 있는 범위로 조정
    }
  };

  return (
    <>
      <Layout>
      <main className="MapContainer h-screen">
      <div id="jeju-map" className="w-full h-[calc(100%-3.75rem)]">
      <div className="absolute top-4 left-4 z-10">
        <button 
          className={`px-4 py-1 border bg-white text-black rounded-full hover:bg-gray-300 shadow focus:outline-none ${visibleCategory === 'permanent' ? 'bg-gray-300' : ''}`} 
          onClick={() => showCategory('permanent')}
        >
          상시
        </button>
        <button 
          className={`px-4 py-1 ml-1 border bg-white text-black rounded-full hover:bg-gray-300 shadow focus:outline-none ${visibleCategory === 'festival' ? 'bg-gray-300' : ''}`} 
          onClick={() => showCategory('festival')}
        >
          축제
        </button>
      </div>
      </div>
      </main>
      </Layout>
    </>
  );
};

