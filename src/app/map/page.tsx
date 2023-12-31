"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Layout from "@/components/layouts/Layout";
import CategoryResultList from '@/components/CategoryResultList';
import SpotCard from '@/components/SpotCard';
import { touristSpots } from '@/types/touristSpots';

export default function MapPage() {
  const permanentMarkerImageSrc = '/Danielle1.png';
  const festivalMarkerImageSrc = '/Hanni1.png';

  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [filteredSpots, setFilteredSpots] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isListVisible, setIsListVisible] = useState(true);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=8d1576d5892fe2db039d7947d8ee3841&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("jeju-map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 8,
        };

        const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(newMap);

        const newMarkers = touristSpots.map(spot => {
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

          window.kakao.maps.event.addListener(marker, 'click', () => {
            setSelectedSpot(spot);
            // setIsListVisible(false);
          });

          return { marker, category: spot.category };
        });

        setMarkers(newMarkers);
        setIsMapLoaded(true);
      });
    };
  }, []);

  const showCategory = category => {
    setVisibleCategory(category);
    const bounds = new window.kakao.maps.LatLngBounds();

    markers.forEach(({ marker, category: markerCategory }) => {
      if (markerCategory === category) {
        marker.setMap(map);
        bounds.extend(marker.getPosition());
      } else {
        marker.setMap(null);
      }
    });

    if (map && !bounds.isEmpty()) {
      map.setBounds(bounds);
    }

    const categorySpots = touristSpots.filter(spot => spot.category === category);
    setFilteredSpots(categorySpots);
  };

  return (
    <Layout noHeader={true}>
      <main className="MapContainer h-screen">
        <div id="jeju-map" className="w-full h-[calc(100%-3.75rem)]">
          {isMapLoaded && (
            <div className="absolute top-4 left-4 z-10">
              <Link href="/map/list" passHref>
                <button className="px-4 py-1 border bg-white text-black rounded-full hover:bg-gray-300 shadow focus:outline-none">
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
          )}
        </div>
        {/* {selectedSpot && (
          <div className="absolute bottom-0 left-0 m-4">
            <SpotCard data={selectedSpot} />
          </div>
        )} */}
      </main>
      {visibleCategory && (
        <CategoryResultList
          spots={filteredSpots}
          map={map}
          isListVisible={isListVisible}
          onHideList={() => setIsListVisible(false)}
        />
      )}
    </Layout>
  );
}
