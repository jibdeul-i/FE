import Layout from "@/components/layouts/Layout";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MapDetailPage = () => {
  const router = useRouter();
  const { id } = router.qeury;

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
export default MapDetailPage;
