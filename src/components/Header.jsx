"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/Image/Frame.png";
import logotext from "../../public/Image/Vector.png";
import Burgermenu from "../../public/Image/Group 40.png";
import star from "../../public/Image/Star 1.png";

import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbar(false);
      }
    };

    if (navbar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbar]);

  return (
  <>
      <header className="sticky top-0 bg-[#F2F2F2] flex justify-between items-center p-5 pt-3">
      <div className="flex items-center">
        <Image src={logo} className="w-10" alt="logo" />
        <div className="flex justify-center">
          <Image src={logotext} className="w-16" alt="logo text" />
          <p className="text-[6px] relative top-[3px] font-semibold">TM</p>
        </div>
      </div>
      <div className="md:hidden z-50">
        {navbar ? (
          <AiOutlineClose
            size={25}
            onClick={() => {
              setNavbar(!navbar);
            }}
          />
        ) : (
          <Image
            onClick={() => {
              setNavbar(!navbar);
            }}
            src={Burgermenu}
            className="w-7 cursor-pointer"
            alt="burger"
          />
        )}
        <Image src={star} className="w-10  absolute top-5 right-10 opacity-50" alt="logo"/>
      </div>
      <nav ref={navRef}
        className={`fixed top-0  right-0  w-2/3  h-full bg-[#fffff]  transform ${
          navbar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out   md:static md:bg-transparent md:flex md:transform-none md:transition-none`}
      >
        <ul className="flex flex-col items-center justify-center md:flex-row md:h-auto">
          <li className="p-4 text-rose-500 text-xl font-bold font-['ClashDisplay'] capitalize leading-relaxed">
            Home
          </li>
          <li className="p-4 text-black text-xl font-medium font-['ClashDisplay'] capitalize leading-relaxed">
            About Us
          </li>
          <li className="p-4 text-black text-xl font-medium font-['ClashDisplay'] capitalize leading-relaxed">
            Pricing
          </li>
          <li className="p-4 text-black text-xl font-medium font-['ClashDisplay'] capitalize leading-relaxed">
            Features
          </li>
          <div className="w-[180px] shadow-lg h-[60px] bg-black rounded flex justify-center items-center">
            <button className="w-full  text-white text-lg font-medium font-['ClashDisplay'] capitalize leading-7">
              Download
            </button>
          </div>
        </ul>
      </nav>
    </header>
  </>
  );
}

export default Header;
