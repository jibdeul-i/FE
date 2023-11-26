"use client";
import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from "react";

const SignupPage = () => {
  return (
    <>
      <section className="py-10">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold mb-10">회원가입</h4>
          {/* social */}
          <div className="flex flex-col justify-center items-center">
            <span className="text-xs text-slate-300 mb-5">
              SNS계정으로 간편하게 회원가입
            </span>
            <div className="grid grid-cols-3 gap-5">
              <a>FACE BOOK</a>
              <a>KAKAO TALK</a>
              <a>GOOGLE</a>
            </div>
          </div>
          <hr className="my-5" />
          {/* normal */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="block text-md font-semibold leading-6 text-gray-900 mb-3"
              >
                이메일
              </label>
              <div className="flex items-center">
                <input
                  id="email"
                  className="border rounded-md p-2"
                  placeholder="이메일"
                />
                <span className="text-slate-300 mx-1">@</span>
                <select
                  id="email_company"
                  className="w-full border rounded-md p-2"
                  defaultValue={""}
                >
                  <option value={""} disabled>
                    선택해주세요
                  </option>
                  <option>gmail.com</option>
                  <option>naver.com</option>
                  <option>hanmail.net</option>
                  <option>daum.net</option>
                  <option>직접입력</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="block text-md font-semibold leading-6 text-gray-900 mb-3"
              >
                비밀번호
              </label>
              <div className="flex items-center">
                <input
                  id="password"
                  className="border rounded-md p-2 w-full"
                  placeholder="비밀번호"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignupPage;
