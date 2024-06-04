import React from "react";
import star from "../../public/Image/Star 1.png";
import Image from "next/image";
import iphone1 from "../../public/Image/iPhone-13-Pro-Front1.png";
import iphone2 from "../../public/Image/iPhone-13-Pro-Front (1).png";
import iphone3 from "../../public/Image/iPhone-13-Pro-Front (2).png";
import { BsPlayCircle } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

// bg-[#F2F2F2]

function Hero() {
  return (
    <div className="h-screen  bg-[#F2F2F2] ">
      <Image
        src={star}
        className="absolute top-20 opacity-20  h-10 w-10 left-2 "
      />
      <div className="flex justify-center items-center   p-20 ">
        {/* heading */}
        <div className=" flex flex-col justify-center items-start gap-5 z-10">
          <div>
            <h1 className=" text-black  text-[64px] font-bold font-clash capitalize leading-[64px]">
              make the best <br /> financial decisions
            </h1>
          </div>
          <div>
            <p className="w-[638px] opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex items-center gap-10 ">
            <div className=" px-5 py-2 bg-black rounded hover:bg-red-500 hover:duration-500 cursor-pointer">
              <button className="text-white text-lg flex items-center gap-2 justify-center font-medium font-clash capitalize leading-7 ">
                get start <IoIosArrowRoundForward size={25} />
              </button>
            </div>
            <div className="px-5 py-2 hover:rounded hover:bg-black hover:text-white hover:duration-500 ">
              <button className="text-lg flex items-center gap-2 justify-center font-medium font-clash capitalize leading-7">
                {" "}
                <BsPlayCircle size={25} /> Watch
              </button>
            </div>
          </div>
          <Image
            src={star}
            className="w-10  relative left-10 top-4 opacity-80"
            alt="logo"
          />

          <img
            src="https://batch-system-ui-fry.vercel.app/dir/images/vnag-strap.png"
            alt=""
            className="w-[490px] h-auto"
          />
        </div>
        {/* gradient */}
        <div className="relative top-0">
          <div className="w-[290px] h-[153px] left-0 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]"></div>
          <div className="w-[284px] h-[153px] left-[33px] top-0 absolute bg-rose-500 rounded-full blur-[100px]"></div>
        </div>
        {/* iphonepng */}
        <div className=" w-1/2 ">
          <div className="absolute right-[4px] top-24  z-10">
            <Image src={iphone1} className="relative  " />
          </div>
          <div className="absolute top-10 right-[60px] z-10">
            <Image src={iphone2} />
          </div>
          <div className="absolute top-0 z-10">
            <Image src={iphone3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
