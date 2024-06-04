import Image from "next/image";
import React from "react";
import Logo from "../../public/Image/Logo.png";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#F2F2F2] h-[40vh] font-clash">
      <footer className="flex   flex-col justify-center items-center">
        <div className="p-10 flex justify-between w-[1091px]">
          <div className="flex  items-start justify-center  flex-col gap-5">
            <div className="flex  items-start">
              <Image src={Logo} className="w-[117px]" alt="logo text" />
            </div>
            <div>
              <ul className="gap-3">
                <li className="text-black flex text-base gap-1 justify-center items-center font-medium font-clash capitalize leading-relaxed">
                  <MdEmail className="text-rose-500 " size={20} />
                  help@frybix.com
                </li>
                <li className="text-black pt-3 flex gap-1 justify-center items-center text-base font-medium font-clash capitalize leading-relaxed">
                  <BsFillTelephoneFill className="text-rose-500 " size={20} />
                  +1 234 456 678 89
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-start justify-center flex-col gap-5">
            <h1 className="text-center text-black text-[32px] font-medium font-clash capitalize leading-[42px]">
              legals
            </h1>
            <ul className="capitalize text-start">
              <li className="">terms of use</li>
              <li className="pt-2">privacy policy</li>
              <li className="pt-2">Cookie policy</li>
            </ul>
          </div>
          <div className="flex items-start justify-center flex-col gap-5">
            <h1 className="text-center text-black text-[32px] font-medium font-clash capitalize leading-[42px]">
              product
            </h1>
            <ul className="capitalize text-start">
              <li className="">take tours</li>
              <li className="pt-2">live chats</li>
              <li className="pt-2">reveiws</li>
            </ul>
          </div>
          <div className="flex items-start justify-center flex-col gap-5">
            <h1 className="text-center text-black text-[32px] font-medium font-clash capitalize leading-[42px]">
              News Letters
            </h1>
            <ul className="capitalize text-start">
              <li className="">stay up to date</li>
            </ul>
            <div className=" flex justify-center items-center">
              <input
                type="text"
                className="outline-none px-5 py-3 text-start rounded-l-xl"
                required
              />
              <button className=" bg-black px-3 py-3 text-white  rounded-r-xl">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="w-[1090px] h-[104px] flex justify-center items-center gap-5  border-t border-neutral-900 ">
          <h1 className=" text-black text-base font-medium font-['Clash Display'] capitalize leading-relaxed tracking-wider">
            Copyright 2024 uifry.com all rights reserved
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
