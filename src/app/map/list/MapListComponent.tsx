import React from 'react';
import CardComponent from '@/components/CardComponent';
import { CardData } from '@/types/mapListData';

interface CardListComponentProps {
  cards: CardData[];
}

const MapListComponent = ({ cards }: CardListComponentProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {cards.map((card) => (
        <CardComponent key={card.id} data={card} />
      ))}
    </div>
  );
};

export default MapListComponent;
