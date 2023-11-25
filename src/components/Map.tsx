"use client"

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
  { name: '신흥2리동백마을', lat: 33.32183649999928, lng: 126.73976395393652, category: 'permanent' },
];

export default function JejuMap() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

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
          const markerPosition = new window.kakao.maps.LatLng(spot.lat, spot.lng);
          const marker = new window.kakao.maps.Marker({
            map: newMap,
            position: markerPosition,
            title: spot.name,
          });

          return { marker, category: spot.category };
        });
        setMarkers(newMarkers);
      });
    });
  }, []);

  const toggleCategory = (category) => {
    markers.forEach(({ marker, category: markerCategory }) => {
      if (markerCategory === category) {
        if (marker.getMap()) {
          marker.setMap(null); // 마커 숨기기
        } else {
          marker.setMap(map); // 마커 표시하기
        }
      }
    });
  };

  return (
    <>
      <div>
        <button onClick={() => toggleCategory('permanent')}>상시</button>
        <button onClick={() => toggleCategory('festival')}>축제</button>
      </div>
      <div id="jeju-map" className="max-w-[500px] h-[500px]"></div>
    </>
  );
};
