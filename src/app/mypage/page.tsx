"use client";

import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/navigation";

const MyPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <div className="flex flex-col">
          <a href="/login" className="mb-5">
            로그인
          </a>
          <a href="/signup">회원가입</a>
        </div>
      </Layout>
    </>
  );
};
export default MyPage;
