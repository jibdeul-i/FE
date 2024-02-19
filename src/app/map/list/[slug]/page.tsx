"use client"

import Layout from "@/components/layouts/Layout";
import SwipeComponent from "@/components/SwipeComponent";
import { coverData, attractionsData, TouristAttraction } from "@/types/TouristAttraction";

export default function MapDetailPage() {
  return (
    <>
      <Layout noHeader={true}>
        <SwipeComponent>
          <div className="relative h-screen w-full">
            <img src={coverData.imageUrl} alt={coverData.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-11 pl-5 pb-11 font-bold text-white text-3xl">
              {coverData.title}
            </div>
          </div>
          {attractionsData.map((attraction: TouristAttraction) => (
            <div key={attraction.id} className="relative h-screen w-full" style={{ backgroundImage: `url(${attraction.images[0]})`, backgroundSize: 'cover' }}>
              <div className="absolute inset-0 p-4">
                <h2 className="text-lg font-semibold text-white">{attraction.name}</h2>
                <p className="text-white">{attraction.description}</p>
                <p className="text-sm text-gray-300">{attraction.address}</p>
              </div>
            </div>
          ))}
        </SwipeComponent>
      </Layout>
    </>
  );
};
