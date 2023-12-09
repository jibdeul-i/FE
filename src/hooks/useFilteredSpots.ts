import { touristSpots } from "@/types/touristSpots";

const useFilteredSpots = (
  spots: TouristSpot[],
  selectedCategory: string | null
) => {
  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => spot.category === selectedCategory);
  }, [spots, selectedCategory]);

  return filteredSpots;
};

export default useFilteredSpots;
