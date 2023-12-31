import { CardData } from '@/types/mapListData';

interface SpotCardProps {
  data: CardData;
}

const SpotCard = ({ data }: SpotCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={data.imageUrl} alt={data.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        {data.interactionCount !== undefined && (
          <p className="text-gray-700 text-base">
            Interactions: {data.interactionCount.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default SpotCard;