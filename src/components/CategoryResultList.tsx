import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { touristSpots } from "@/types/touristSpots"

interface CategoryResultListProps {
  spots: TouristSpot[];
  map: any;
}

const CategoryResultList = ({ spots, map }: CategoryResultListProps) => { 
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(100);
  const [fullHeight, setFullHeight] = useState(0);

  useEffect(() => {
    setFullHeight(window.innerHeight);
  }, []);

  const expandStyle = useSpring({
    to: {height: isExpanded ? `${fullHeight}px` : `${height}px`},
    from: { height: '100px' },
    config: config.gentle,
  });

  const handleDrag = () => {
    if (height === 100) {
      setHeight(500);
    } else if (height === 500) {
      setIsExpanded(true);
    } else {
      setHeight(100);
      setIsExpanded(false);
    }
  };

  const handleClickSpot = (lat, lng) => {
    const moveLatLng = new kakao.maps.LatLng(lat, lng);
    map.setCenter(moveLatLng);
    setIsExpanded(false);
  };

  return (
    <animated.div
      style={expandStyle}
      className="absolute bottom-0 z-50 p-4 bg-white shadow-lg overflow-y-auto w-[500px] rounded-t-2xl"
      onTouchEnd={handleDrag} 
      onMouseUp={handleDrag}
      // onClick={handleDrag}
    >
      {spots.map(spot => (
        <div 
          key={spot.name} 
          onClick={() => handleClickSpot(spot.lat, spot.lng)}
          className="p-2 border-b hover:bg-gray-100 hover:cursor-pointer"
        >
          <img src={spot.imageUrl} alt={spot.name} />
          <h3 className="text-md font-semibold">{spot.name}</h3>
        </div>
      ))}
    </animated.div>
  );
};

export default CategoryResultList;