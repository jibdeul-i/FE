import { touristSpots } from "@/types/touristSpots"

interface CategoryResultListProps {
  spots: TouristSpot[];
}

const CategoryResultList = ({ spots }: CategoryResultListProps) => {
  return (
    <div className="fixed inset-x-0 bottom-12 z-50 p-4 bg-white shadow-lg overflow-y-auto w-[520px] max-h-32">
      {spots.map(spot => (
        <div key={spot.name} className="p-2 hover:bg-gray-100">
          <h3 className="text-md font-semibold">{spot.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryResultList;