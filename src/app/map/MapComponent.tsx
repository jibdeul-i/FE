"use client"

import React, { useEffect, useState } from 'react';
import { TouristSpot } from '../../types/touristSpots';

const MapComponent = ({ spots, markerImages, onMapLoad }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    function initializeMap() {
      const mapContainer = document.getElementById("jeju-map"); 
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 8,
      };

      const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);

      const newMarkers = spots.map(spot => {
        const imageSize = new window.kakao.maps.Size(24, 35);
        const imageSrc = spot.category === 'permanent' ? markerImages.permanent : markerImages.festival;
        const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

        const marker = new window.kakao.maps.Marker({
          map: newMap,
          position: new window.kakao.maps.LatLng(spot.lat, spot.lng),
          title: spot.name,
          image: markerImage
        });

        return marker;
      });

      setMarkers(newMarkers);

      if (onMapLoad) {
        onMapLoad(newMap, newMarkers);
      }
    }

    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = "/maps-api";

      document.head.appendChild(script);

      script.onload = () => {
        window.kakao.maps.load(initializeMap);
      };
    } else {
      initializeMap();
    }
  }, [spots, markerImages, onMapLoad]);

  return <div id="jeju-map" className="w-full h-[calc(100%-3.75rem)]"></div>;
};

export default MapComponent;
