"use client"

import Layout from "@/components/layouts/Layout";
import SwipeComponent from "@/components/SwipeComponent";
import { coverData, attractionsData, TouristAttraction } from "@/types/TouristAttraction";

export default function MapDetailPage() {
  return (
    <>
      <Layout noHeader={true}>
        <SwipeComponent>
          <div className="bg-cover bg-center h-screen flex items-center justify-center text-white text-2xl" style={{ backgroundImage: `url(${coverData.imageUrl})` }}>
            {coverData.title}
          </div>
          {attractionsData.map((attraction: TouristAttraction) => (
            <div key={attraction.id} className="page-content p-4">
              <h2 className="text-lg font-semibold">{attraction.name}</h2>
              <p>{attraction.description}</p>
              <p className="text-sm text-gray-600">{attraction.address}</p>
              {attraction.images.map((image, index) => (
                <img key={index} src={image} alt={attraction.name} className="mt-2 max-w-full h-auto"/>
              ))}
            </div>
          ))}
        </SwipeComponent>
      </Layout>
    </>
  );
};
