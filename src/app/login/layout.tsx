import Layout from "@/components/layouts/Layout";
import React from "react";

interface LoginPageProps {
  children: React.ReactNode;
}

const LoginPageLayout = (props: LoginPageProps) => {
  const { children } = props;

  return (
    <>
      <Layout noHeader noLogo>
        <main>{children}</main>
      </Layout>
    </>
  );
};
export default LoginPageLayout;
