import React from "react";
import star from "../../public/Image/Star 1.png";
import Image from "next/image";

function FAQ() {
  return (
    <section className="min-h-screen bg-[#F2F2F2]">
      <div className="flex justify-around flex-col gap-4 p-10 lg:p-0">
        <div className="lg:pl-24">
          <h1 className="text-rose-500 text-lg font-medium font-clash uppercase leading-7 tracking-[2.88px]">
            FQA
          </h1>
          <h1 className="lg:w-[497px]  text-black text-xl lg:text-5xl font-bold font-clash capitalize leading-[48px]">
            {" "}
            Frequently asked questions
          </h1>
        </div>
        {/* comments */}
        <div className="pt-10 flex flex-wrap justify-around gap-10 ">
        {/* co1 */}
          <div className="h-[181px]  lg:w-[535px] bg-rose-500 p-5 rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px] text-white text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify text-white text-sm lg:text-lg font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>




          <div className="p-5 h-[181px] lg:w-[535px] bg-[#F2F2F2] rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px]  text-[28px] text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify text-sm lg:text-lg   font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>
          <div className="p-5 h-[181px] lg:w-[535px] bg-[#F2F2F2] rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px]  text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify   text-sm lg:text-lg font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>
          <div className="p-5 h-[181px] lg:w-[535px] bg-rose-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px] text-white   text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify text-white  text-sm lg:text-lg font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>
          <div className="p-5 h-[181px] lg:w-[535px] bg-rose-500 rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px] text-white text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify text-white text-sm lg:text-lg font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>
          <div className="p-5 h-[181px] lg:w-[535px] bg-[#F2F2F2] rounded-xl flex flex-col justify-center items-center">
            <h1 className="lg:w-[474px]  text-base lg:text-[28px] font-semibold font-clash capitalize leading-7">
              the best financial accounting app ever!
            </h1>
            <h1 className="lg:w-[466px] text-justify  text-sm lg:text-lg font-medium font-clash capitalize leading-7">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </h1>
          </div>
        </div>
        <div className="  ">
            <Image src={star} className="bottom-5 relative left-11 opacity-50  h-10 w-10  " />
          </div>
      </div>
    </section>
  );
}

export default FAQ;
