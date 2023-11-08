import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <div className="h-screen max-w-[500px] mx-auto flex flex-col pt-[60px]">
        <Header />
        <main>
          <div className="pt-[110px]">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
