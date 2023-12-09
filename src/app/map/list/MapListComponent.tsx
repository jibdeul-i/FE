import React from 'react';
import Link from 'next/link';
import { CardData } from '@/types/mapListData';
import CardComponent from '@/components/CardComponent';

interface CardListComponentProps {
  cards: CardData[];
}

const MapListComponent = ({ cards }: CardListComponentProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {cards.map((card) => (
        <Link href={`/map/list/${card.id}`} key={card.id} passHref>
          <CardComponent data={card} />
        </Link>
      ))}
    </div>
  );
};

export default MapListComponent;
