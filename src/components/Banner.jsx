import Image from "next/image";
import React from "react";
import DownlodeF from "../../public/Image/DownlodeFrame.png";
import iPhonePro from "../../public/Image/iPhone 13 Pro.png";
import Star2 from "../../public/Image/Star 7.png";
import { FaApple } from "react-icons/fa";
import Circle from "./Circle";
import star from "../../public/Image/Star 1.png";

function Banner() {
  return (
    <section className="bg-[#F2F2F2] lg:h-[50vh] relative  flex justify-center items-center">
      {" "}
      <Image src={star} className="absolute left-28 opacity-90  h-10 w-10  " />
      <div className="w-[1090px] relative overflow-hidden h-[405px] bg-black flex flex-col lg:flex-row justify-around items-center ">
        {/* circle */}
        <div class="relative bottom-0 opacity-20 top-32  right-32 w-[390px] h-[300px]">
          <div class="w-[380px] h-[247px] left-0 top-[332.70px] absolute origin-top-left  -rotate-45 rounded-full border border-white"></div>
          <div class="w-[380px] h-[247px] left-0 top-[300.70px] absolute origin-top-left -rotate-45 rounded-full border border-white"></div>
          <div class="w-[380px] h-[247px] left-0 top-[268.70px] absolute origin-top-left  -rotate-45 rounded-full border border-white"></div>
        </div>
        <Image
          src={Star2}
          className="absolute bottom-8 opacity-90  h-5 w-5  "
        />
        <Image
          src={Star2}
          className="absolute top-8 right-40 opacity-90  h-10 w-10  "
        />
        <div className="absolute left-10 flex flex-col lg:text-start gap-5 text-center  justify-center">
          <div className="">
            <h1 className="text-white text-5xl font-bold font-clash capitalize leading-[48px]">
              ready to get started?
            </h1>
            <h1 className="lg:w-[536px] text-white text-lg font-normal font-clash capitalize leading-7">
              Risus habitant leo egestas mauris diam eget morbi tempus vulputate
            </h1>
          </div>
          <div className=" w-[208px] gap-2 bg-white rounded  flex justify-center items-center hover:bg-red-500 hover:duration-500 hover:text-white cursor-pointer">
            <button className=" px-5   py-3 flex justify-center items-center gap-2 text-lg font-medium font-clash capitalize leading-7 hover:text-white">
              download app <FaApple size={25} />
            </button>
          </div>
        </div>
        {/* circle */}
        <div class="relative  opacity-20 top-[-50%] left-[35%]  w-[390px] h-[300px] ">
          <div class="w-full h-full right-0 top-[332.70px] absolute origin-top-left  -rotate-45 rounded-full border border-white"></div>
          <div class="w-full h-full right-0 top-[300.70px] absolute origin-top-left  -rotate-45 rounded-full border border-white"></div>
          <div class="w-full h-full right-0 top-[268.70px] absolute origin-top-left   -rotate-45 rounded-full border border-white"></div>
        </div>
        <div className="relative lg:left-9">
          <Image src={iPhonePro} className="w-[400px] " />
        </div>
      </div>
    </section>
  );
}

export default Banner;
