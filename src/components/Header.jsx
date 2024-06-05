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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 bg-[#F2F2F2] flex justify-between items-center pl-10 pr-10 p-5 rounded-t-3xl lg:z-10  ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex justify-between w-full">
          <div className="flex items-center  z-10">
            <Image src={logo} className="w-10" alt="logo" />
            <div className="flex justify-center">
              <Image src={logotext} className="w-16" alt="logo text" />
              <p className="text-[6px] relative top-[3px] font-semibold">TM</p>
            </div>
            <div className="relative top-6">
              <div className="w-52 h-[153px] left-0 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]" />
              <div className="w-52 h-[153px] left-[33px] top-0 absolute bg-rose-500 rounded-full blur-[100px]" />
            </div>
            <div className="pl-5 hidden lg:block">
              <nav class="flex gap-5">
                <h1 class="text-rose-500 text-xl font-bold font-clash capitalize leading-relaxed">
                  home
                </h1>
                <h1 class="text-black text-xl font-medium font-clash capitalize leading-relaxed">
                  about us
                </h1>
                <h1 class="text-black text-xl font-medium font-clash capitalize leading-relaxed">
                  pricing
                </h1>
                <h1 class="text-black text-xl font-medium font-clash capitalize leading-relaxed">
                  features
                </h1>
              </nav>
              <div className="px-5 py-3 hover:bg-rose-600 absolute right-10  top-5 cursor-pointer z-10   bg-black rounded-xl flex justify-center items-center mr-6 hover:duration-500 ">
            <button class=" text-white text-lg font-medium font-clash capitalize leading-7 ">
              download
            </button>
          </div>
            </div>
          </div>
       
        </div>
        <Image
          src={star}
          className="w-10  absolute bottom-[-30px] right-10 opacity-80"
          alt="logo"
        />
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
          <Image
            src={star}
            className="w-10  absolute top-5 right-10 opacity-50"
            alt="logo"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
