"use client"

import Layout from "@/components/layouts/Layout";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type PageParams = {
  slug: string;
}

export default function MapDetailPage ({ params }: { params: PageParams }) {
  const router = useRouter();
  const id = router.qeury;

  useEffect(() => {

  }, [id]);

  return (
    <>
      <Layout>
        <div>123</div>
      </Layout>
    </>
  );
};

