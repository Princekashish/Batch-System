import React from "react";
import star from "../../public/Image/Star 1.png";
import Circle from "../../public/Image/Group 35887.png";
import Image from "next/image";
import iphone1 from "../../public/Image/iPhone-13-Pro-Front.png";

function Hero() {
  return (
    <div className="h-screen w-full">
      <Image
        src={star}
        className="w-10 relative top-10 left-6 opacity-50"
        alt="logo"
      />
      <div className="flex flex-col justify-start items-center ">
        <div className="lg:w-[317px] h-[230px] relative ">
          <div className="w-[290px] h-[153px] left-0 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]" />
          <div className="w-[284px] h-[153px] left-[33px] top-0 absolute bg-rose-500 rounded-full blur-[100px]" />
          <div className="relative z-50  text-center">
            <h1 className="text-black text-[35px] lg:text-[64px] font-bold font-['ClashDisplay'] capitalize lg:leading-[64px]">
              make <br /> the best <br /> financial decisions
            </h1>
          </div>
        </div>
        <div className=" ">
          <Image src={Circle} />
          <div className="origin-top-left rotate-[-15deg]  ">
            
           
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Hero;
