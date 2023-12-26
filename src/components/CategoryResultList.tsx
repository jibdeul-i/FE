import { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

interface CategoryResultListProps {
  spots: touristSpots[]; // Correct the type name here
  map: any;
  isListVisible: boolean;
  onHideList: () => void;
}

const CategoryResultList = ({ spots, map, isListVisible, onHideList }: CategoryResultListProps) => { 
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(100);
  const [fullHeight, setFullHeight] = useState(0);

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
      setIsExpanded(false);
    } else if (height === 40 * (fullHeight / 100)) {
      setHeight(fullHeight);
      setIsExpanded(false);
    } else if (height === fullHeight) {
      setHeight(100);
      setIsExpanded(false);
    }
  };

  const handleListElementClick = (lat, lng) => {
    console.log(`Clicked spot with lat: ${lat}, lng: ${lng}`);
    const moveLatLng = new window.kakao.maps.LatLng(lat, lng); // Import kakao.maps.LatLng
    map.setCenter(moveLatLng);
    onHideList(); // 리스트 화면 숨기기
  };

  return (
    <animated.div
      style={{ height: expandStyle.height }}
      className={`absolute bottom-0 z-50 p-4 bg-white shadow-lg overflow-y-auto w-[500px] rounded-t-2xl ${isListVisible ? '' : 'hidden'}`}
    >
      <div className="w-1/3 h-2 bg-gray-400 rounded-t-lg cursor-pointer mx-auto mb-2" onClick={handleDrag}></div>
      {spots.map(spot => (
        <div 
          key={spot.name} 
          onClick={() => handleListElementClick(spot.lat, spot.lng)} 
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
