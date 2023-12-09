import { useState, useEffect } from "react";

const useCategoryFilter = (map, markers, category) => {
  const [visibleCategory, setVisibleCategory] = useState(category);

  useEffect(() => {
    if (!map || !markers) return;

    const bounds = new window.kakao.maps.LatLngBounds();

    markers.forEach((marker) => {
      // 마커 객체의 존재성을 확인
      if (marker && marker.marker) {
        if (marker.category === visibleCategory) {
          marker.marker.setMap(map);
          bounds.extend(marker.marker.getPosition());
        } else {
          marker.marker.setMap(null);
        }
      }
    });

    if (!bounds.isEmpty()) {
      map.setBounds(bounds);
    }
  }, [visibleCategory, map, markers]);

  return { visibleCategory, setVisibleCategory };
};

export default useCategoryFilter;
