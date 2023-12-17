"use client"

import { useEffect, useState } from 'react';
import Link  from 'next/link';
import Layout from "@/components/layouts/Layout";
import CategoryResultList from '@/components/CategoryResultList';
import useFilteredSpots from '@/hooks/useFilteredSpots';
import { touristSpots } from '@/types/touristSpots';

export default function() {
  const permanentMarkerImageSrc = '/Danielle1.png';
  const festivalMarkerImageSrc = '/Hanni1.png';

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [filteredSpots, setFilteredSpots] = useState([]);

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

    const categorySpots = touristSpots.filter(spot => spot.category === category);
    setFilteredSpots(categorySpots);
  };

  return (
    <>
      <Layout noHeader={true}>
      <main className="MapContainer h-screen">
      <div id="jeju-map" className="w-full h-[calc(100%-3.75rem)]">
      <div className="absolute top-4 left-4 z-10">
        <Link href="/map/list" passHref>
        <button 
          className="px-4 py-1 border bg-white text-black rounded-full hover:bg-gray-300 shadow focus:outline-none">
            어디 갈까
        </button>
        </Link>
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
      {visibleCategory && (
      <CategoryResultList spots={filteredSpots} map={map} />
      )}
      </Layout>
    </>
  );
};