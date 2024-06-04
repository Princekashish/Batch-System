import Image from "next/image";
import React from "react";
import DownlodeF from "../../public/Image/DownlodeFrame.png";
import { FaApple } from "react-icons/fa";

function Downlode() {
  return (
    <div className="bg-[#F2F2F2] h-[50vh] flex justify-center items-center">
      <div className="w-[1090px] h-[405px] bg-black flex justify-around items-center ">
        <div className="flex flex-col text-start gap-5">
          <div className="">
            <h1 className="text-white text-5xl font-bold font-clash capitalize leading-[48px]">
              ready to get started?
            </h1>
            <h1 className="w-[536px] text-white text-lg font-normal font-clash capitalize leading-7">
              Risus habitant leo egestas mauris diam eget morbi tempus vulputate
            </h1>
          </div>
          <div className="px-5 py-3 w-52 h-[60px] justify-center items-center gap-2 bg-white rounded flex ">
            <button className=" text-black text-lg font-medium font-clash capitalize leading-7">
              download app 
            </button>
            <FaApple size={25} />
          </div>
        </div>
        <div>
          <p className="text-white">Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  );
}

export default Downlode;
