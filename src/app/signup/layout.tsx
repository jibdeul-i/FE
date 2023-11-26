import Layout from "@/components/layouts/Layout";
import React from "react";

interface SignupPageProps {
  children: React.ReactNode;
}

const SignupPageLayout = (props: SignupPageProps) => {
  const { children } = props;

  return (
    <>
      <Layout noHeader>
        <main>{children}</main>
      </Layout>
    </>
  );
};
export default SignupPageLayout;
