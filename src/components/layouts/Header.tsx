"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const headerControl = () => {
      if (Math.floor(window.scrollY) > 80) {
        if (headerRef.current != null) {
          headerRef.current.style.transform = `translateY(-80px)`;
        }
        return;
      }
      if (headerRef.current != null) {
        headerRef.current.style.transform = `translateY(-${Math.floor(
          window.scrollY
        )}px)`;
      }
    };

    addEventListener("scroll", () => {
      headerControl();
    });
    return removeEventListener("scroll", () => {
      headerControl();
    });
  });

  return (
    <>
      <div
        className={"fixed w-[500px]"}
        style={{ transform: "translateY(-0px)" }}
        ref={headerRef}
      >
        <div className="h-[80px] bg-green-300">test event</div>
        <div className="h-[30px] text-white bg-red-600">not fixed Header</div>
      </div>
    </>
  );
};
export default Header;
