import React from 'react';
import Layout from "@/components/layouts/Layout";
import MapListComponent from './MapListComponent';
import { CardData } from '@/types/mapListData';

const cards: CardData[] = [
  {
    id: '1',
    title: '테스트 타이틀',
    imageUrl: '/jeju.png',
    interactionCount: 2318,
  },
  {
    id: '2',
    title: '테스트 타이틀',
    imageUrl: '/jeju.png',
    interactionCount: 7057,
  },
  {
    id: '3',
    title: '테스트 타이틀',
    imageUrl: '/jeju.png',
    interactionCount: 28008,
  },
  {
    id: '4',
    title: '테스트 타이틀',
    imageUrl: '/jeju.png',
    interactionCount: 9656,
  },
  {
    id: '5',
    title: '테스트 타이틀',
    imageUrl: '/jeju.png',
    interactionCount: 38319,
  },
];

const Page = () => {
  return (
    <>
      <Layout noHeader={true}>
        <div className="container mx-auto p-4">
          <MapListComponent cards={cards} />
        </div>
      </Layout>
    </>
  );
};

export default Page;

  