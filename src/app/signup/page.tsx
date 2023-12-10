"use client";
import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from "react";

const SignupPage = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col mt-3 mb-10">
          <h4 className="text-xl font-bold mb-10">회원가입</h4>
          {/* social */}
          <div className="flex flex-col justify-center items-center mb-5">
            <div className="text-slate-500 mb-5">
              SNS계정으로 간편하게 회원가입
            </div>
            <div className="grid grid-cols-3 gap-5">
              <a className="flex items-center justify-center cursor-pointer hover:opacity-80">
                <img src="/auth/facebook_logo.png" className="w-12" />
              </a>
              <a className="flex items-center justify-center cursor-pointer hover:opacity-80">
                <img src="/auth/kakaotalk_logo.png" className="w-12" />
              </a>
              <a className="flex items-center justify-center cursor-pointer hover:opacity-80">
                <img src="/auth/google_logo.png" className="w-12" />
              </a>
            </div>
          </div>
          <hr className="my-5" />
          {/* normal */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="block text-md font-semibold leading-6 text-gray-900 mb-2"
              >
                이메일
              </label>
              <div className="flex">
                <input
                  id="email"
                  className="border rounded-md p-2"
                  placeholder="이메일"
                />
                <span className="text-slate-300 mx-1 my-auto">@</span>
                <select
                  id="email_company"
                  className="w-full border p-2 rounded-md"
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
              <button className="mt-5 flex justify-center items-center border p-3">
                이메일 인증하기
              </button>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password" className="text-md mb-2">
                <h4 className="font-semibold leading-6 text-gray-900 mb-1">
                  비밀번호
                </h4>
                <span className="text-slate-500 text-sm">
                  영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
                </span>
              </label>
              <div className="flex items-center">
                <input
                  id="password"
                  className="border rounded-md p-2 w-full"
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="password_check" className="text-md mb-2">
                <h4 className="font-semibold leading-6 text-gray-900 mb-1">
                  비밀번호 확인
                </h4>
              </label>
              <div className="flex items-center">
                <input
                  id="password_check"
                  className="border rounded-md p-2 w-full"
                  placeholder="비밀번호 확인"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-md mb-2">
                <h4 className="font-semibold leading-6 text-gray-900 mb-1">
                  닉네임
                </h4>
                <span className="text-slate-500 text-sm">
                  다른 유저와 겹치지 않도록 입력해주세요. (2~15자)
                </span>
              </label>
              <div className="flex items-center">
                <input
                  id="name"
                  className="border rounded-md p-2 w-full"
                  placeholder="닉네임 (2~15자)"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="text-md mb-2">
                <h4 className="font-semibold leading-6 text-gray-900 mb-1">
                  약관동의
                </h4>
              </label>
              <div className="flex flex-col border p-5">
                <div className="flex py-2 border-b mb-2">
                  <input type="checkbox" className="mr-1" />
                  <h6 className="text-base font-semibold">전체동의</h6>
                </div>
                <div className="flex"></div>
              </div>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              회원가입
            </button>
          </div>
          <div className="flex items-center justify-center mt-5 mb-16">
            <span className="text-slate-500">이미 아이디가 있으신가요?</span>
            <a href="/login" className="ml-1 hover:underline">
              로그인
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignupPage;
