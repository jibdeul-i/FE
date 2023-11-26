import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  noFooter?: boolean;
}

const Layout = (props: LayoutProps) => {
  const { children, noHeader, noFooter } = props;
  return (
    <>
      <div className="h-screen max-w-[500px] mx-auto flex flex-col pt-[60px]">
        <div
          className={
            "flex items-center fixed h-[60px] top-0 w-full max-w-[500px] z-10  "
          }
        >
          로고로고
        </div>
        {!noHeader && <Header />}
        <main>
          <div className={`${!noHeader && "pt-[110px]"}`}>{children}</div>
        </main>
        {!noFooter && <Footer />}
      </div>
    </>
  );
};
export default Layout;
