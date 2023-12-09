import { touristSpots } from "@/types/touristSpots"

interface CategoryResultListProps = {
  spots: TouristSpot[];
}

const CategoryResultList = ({ spots }: CategoryResultListProps) => {
  return (
    <div className="">
      {spots.map(spot => (
        <div key={spot.id}>
          <h3>{spot.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryResultList;