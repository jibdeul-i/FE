"use client";

import {
  ChatBubbleOutline,
  ChatBubbleOvalOutline,
  HomeIconOutline,
  MapOutline,
  QuestionOutline,
  UserCircleOutline,
} from "@/assets/icons/heroicons";

const Footer = () => {
  return (
    <>
      <div
        className={
          "flex fixed h-[60px] bottom-0 w-full max-w-[500px] bg-white border-t z-[999999]"
        }
      >
        <div className="w-full grid grid-cols-5 items-center">
          <a
            href="/"
            className="h-full flex justify-center items-center border-l hover:text-blue-500"
          >
            <HomeIconOutline />
          </a>
          <a
            href="/community"
            className="h-full flex justify-center items-center hover:text-blue-500"
          >
            <ChatBubbleOvalOutline />
          </a>
          <a
            href="/map"
            className="h-full flex justify-center items-center hover:text-blue-500"
          >
            <MapOutline />
          </a>
          <a
            href="/qna"
            className="h-full flex justify-center items-center hover:text-blue-500"
          >
            <QuestionOutline />
          </a>
          <a
            href="/mypage"
            className="h-full flex justify-center items-center border-r hover:text-blue-500"
          >
            <UserCircleOutline />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
