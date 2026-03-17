import { useState, useEffect } from "react";

function BackToTop() {

  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / totalHeight) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (

    <>
      <style>{`

      .loader-wrapper{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:#0f0715;
      display:flex;
      justify-content:center;
      align-items:center;
      z-index:9999;
      }

      .loader{
      width:50px;
      height:50px;
      border:4px solid #8750f7;
      border-top:4px solid transparent;
      border-radius:50%;
      animation:spin 1s linear infinite;
      }

      @keyframes spin{
      0%{transform:rotate(0deg);}
      100%{transform:rotate(360deg);}
      }

      .scroll-circle{
      position:fixed;
      right:30px;
      bottom:30px;
      width:55px;
      height:55px;
      border-radius:50%;
      background:conic-gradient(#8750f7 ${scroll}%, #2a1454 ${scroll}%);
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      z-index:999;
      }

      .scroll-inner{
      width:42px;
      height:42px;
      background:#0f0715;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#fff;
      font-size:18px;
      }

      .scroll-circle:hover{
      transform:translateY(-4px);
      transition:0.3s;
      }

      `}</style>


      {/* Loader */}

      {loading && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}


      {/* Scroll Progress Circle */}

      <div className="scroll-circle" onClick={scrollTop}>

        <div className="scroll-inner">
          <i className="fa fa-arrow-up"></i>
        </div>

      </div>

    </>
  );
}

export default BackToTop;