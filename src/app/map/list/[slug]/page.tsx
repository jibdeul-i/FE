"use client";

import Layout from "@/components/layouts/Layout";
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { coverData, attractionsData, TouristAttraction } from '@/types/TouristAttraction'; 

export default function MapDetailPage() {
  const router = useRouter();
  const [attraction, setAttraction] = useState(null);

  console.log('Router object outside useEffect:', router);


  useEffect(() => {
    console.log('Inside useEffect - Router is ready:', router.isReady);
    if (router.isReady) {
      const slug = router.query.slug as string;
      console.log('Router query:', router.query); 
      console.log('Slug:', slug); 

      const matchedAttraction = attractionsData.find(a => a.id === Number(slug));
      setAttraction(matchedAttraction || null);
    }
  }, [router]);

  if (!attraction) {
    return <div>Loading...</div>;
  }

  // 관광지 데이터를 기반으로 페이지 렌더링
  return (
    <>
      <Layout noHeader={true}>
        <Swiper>
          {/* 커버 슬라이드 */}
          <SwiperSlide>
            <div className="w-full h-screen relative">
              <Image
                src={coverData.coverImage}
                layout="fill"
                objectFit="cover"
                alt="Cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <h1 className="text-5xl font-bold text-white">{coverData.title}</h1>
              </div>
            </div>
          </SwiperSlide>

          {/* 선택된 관광지의 슬라이드 */}
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