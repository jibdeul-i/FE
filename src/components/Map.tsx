import { useEffect } from 'react';

type TouristSpot = {
  name: string;
  lat: number;
  lng: number;
};

const touristSpots: TouristSpot[] = [
  { name: '첫 번째 관광지', lat: 33.499621, lng: 126.531188 },
];

export default function JejuMap() {
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
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    });
  }, []); 
  
  return (
    <>
      <div id="jeju-map" className="w-full h-[400px]"></div>
    </>
  )
};


