const Footer = () => {
  return (
    <>
      <div
        className={
          "flex fixed h-[60px] bottom-0 w-full max-w-[500px] bg-white border-t"
        }
      >
        <div className="w-full grid grid-cols-5 items-center">
        <a href="" className="h-full flex justify-center items-center border-l">
        홈
        </a>
        <a  href="" className="h-full flex justify-center items-center">
        커뮤니티
        </a>
        <a href="" className="h-full flex justify-center items-center">
      지도
        </a>
        <a href="" className="h-full flex justify-center items-center ">
        Q&A
        </a>
        <a href="" className="h-full flex justify-center items-center border-r">
        마이페이지
        </a>
      
    
        </div>
      </div>
    </>
  );
};
export default Footer;
