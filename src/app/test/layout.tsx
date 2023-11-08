import Layout from "@/components/layouts/Layout";
import React from "react";

const TestPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout>
        <div className={"bg-gray-700"}>inner header</div>
        <main>{children}</main>
      </Layout>
    </>
  );
};
export default TestPageLayout;
