const TestPage = () => {
  return (
    <>
      <div className={"bg-purple-500 h-[1000px] flex flex-col"}>
        <div>page-content1</div>
        <h2 className="mt-[150px] mx-auto">스크롤을 해보세여</h2>
      </div>
      <div className="bg-black h-[1000px] text-white flex flex-col">
        <div>page-content2</div>
        <span className=" mt-40 mx-auto">
          유심사랑 같은 방법으로 해봤습니다.
        </span>
      </div>
    </>
  );
};
export default TestPage;
