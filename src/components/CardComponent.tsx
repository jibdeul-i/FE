import React from 'react';
import { CardData } from '@/types/mapListData';

interface CardComponentProps {
  data: CardData;
}

const CardComponent = ({ data }: CardComponentProps) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white relative">
      <img className="w-full h-48 object-cover opacity-90" src={data.imageUrl} alt={data.title} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center">
        <div className="font-bold text-4xl mb-2 text-white">{data.title}</div>
        <div className="flex justify-center items-center text-white text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {data.interactionCount.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
