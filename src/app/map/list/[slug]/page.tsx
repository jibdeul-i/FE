"use client"

import Layout from "@/components/layouts/Layout";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { coverData, attractionsData, TouristAttraction } from "@/types/touristAttraction";

type PageParams = {
  slug: string;
}

export default function MapDetailPage ({ params }: { params: PageParams }) {
  const router = useRouter();
  const slug = router.query;
  const [attraction, setAttraction] = useState<TouristAttraction | null>(null);

  useEffect(() => {
    console.log('Router is ready:', router.isReady);

    if (router.isReady) {
      const { slug } = router.query;
      console.log('Slug:', slug);
    }
  }, [router.isReady, router.query]);

  if (!attraction) {
    return <div>loading</div>; 
  }

  return (
    <>
      <Layout noHeader={true}>
        <Swiper>
          <SwiperSlide>
            <div className="w-full h-screen relative">
              <Image
                src={coverData.imageUrl}
                layout="fill"
                objectFit="cover"
                alt="Cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <h1 className="text-5xl font-bold text-white">{coverData.title}</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide key={attraction.id}>
              <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-4xl font-bold mb-4">{attraction.name}</h2>
                <div className="max-w-2xl">
                  {attraction.images.map((image, index) => (
                    <div key={index} className="mb-4">
                      <Image
                        src={image}
                        width={640}
                        height={360}
                        alt={`Image of ${attraction.name}`}
                      />
                    </div>
                  ))}
                  <p className="text-lg mb-4">{attraction.description}</p>
                  <p className="text-md">{attraction.address}</p>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </Layout>
    </>
  );
};

