const LoginPage = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center p-10 my-auto">
          <div className="py-5">로고</div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="block text-md font-semibold leading-6 text-gray-900 mb-2"
              >
                이메일
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md p-2"
                placeholder="이메일"
              />
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="block text-md font-semibold leading-6 text-gray-900 mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="border rounded-md p-2"
                placeholder="비밀번호"
              />
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              로그인
            </button>
          </div>
          <div className="flex flex-col mt-5">
            <div className="grid grid-cols-2 gap-5 text-center">
              <a>비밀번호 재설정</a>
              <a href="/signup">회원가입</a>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
              <div className="text-slate-500 mb-5">SNS계정으로 로그인하기</div>
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
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
