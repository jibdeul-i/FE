import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

interface TouristSpot {
  name: string;
  lat: number;
  lng: number;
  imageUrl: string;
}

interface CategoryResultListProps {
  spots: TouristSpot[];
  map: any; 
  isListVisible: boolean;
  onHideList: () => void;
}

function CategoryResultList({ spots, map, isListVisible, onHideList }: CategoryResultListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(100);
  const [fullHeight, setFullHeight] = useState(0);
  const listRef = useRef(null); 

  useEffect(() => {
    setFullHeight(window.innerHeight);
  }, []);

  const expandStyle = useSpring({
    height: isExpanded ? `${fullHeight}px` : `${height}px`,
    config: config.default,
  });

  const handleDrag = () => {
    if (height === 100) {
      setHeight(40 * (fullHeight / 100));
    } else if (height === 40 * (fullHeight / 100) && !isExpanded) {
      setHeight(fullHeight);
      setIsExpanded(true);
    } else {
      setHeight(100);
      setIsExpanded(false);
    }
  };

  const handleListElementClick = (lat: number, lng: number) => {
    if (map) {
      const moveLatLng = new window.kakao.maps.LatLng(lat, lng);
      map.setCenter(moveLatLng);
      map.setLevel(3); 
    }
    
    setHeight(100); // 회색바의 높이에 맞춰 변경
    setIsExpanded(false);

    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  };

  return (
    <animated.div
      ref={listRef}
      style={{ height: expandStyle.height }}
      className={`absolute bottom-0 z-50 p-4 bg-white shadow-lg overflow-y-auto w-[500px] rounded-t-2xl ${isListVisible ? '' : 'hidden'}`}
    >
    <div 
      className="w-full cursor-pointer mx-auto mb-2" 
      onClick={handleDrag}
    >
      <div className="w-1/6 h-2 bg-gray-300 rounded-lg mx-auto"></div>
    </div>
      {spots.map(spot => (
        <div 
          key={spot.name} 
          onClick={() => handleListElementClick(spot.lat, spot.lng)} 
          className="p-2 border-b hover:bg-gray-100 hover:cursor-pointer"
        >
          <img src={spot.imageUrl} alt={spot.name} className="w-full h-auto" />
          <h3 className="text-md font-semibold">{spot.name}</h3>
        </div>
      ))}
    </animated.div>
  );
}

export default CategoryResultList;
