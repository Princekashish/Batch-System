import React from "react";
import star from "../../public/Image/Star 1.png";
import Image from "next/image";

function Testemonial() {
  return (
    <section className="min-h-screen bg-[#F2F2F2] pt-5 lg:pt-0">
      <div className="flex flex-col items-center justify-center gap-1">
        {/* testimonial heading */}
        <h1 className="text-center text-black text-lg font-medium font-clash uppercase leading-7 tracking-[2.88px]">
          testimonial
        </h1>
        <h1 className=" text-center text-black text-5xl font-bold font-clash capitalize leading-[48px]">
          what our users <br /> say about us?
        </h1>
        {/* testimonial start */}
        <div className="flex justify-around  flex-col lg:flex-row items-center pl-10 pr-10 ">
          <div className="">
            <img
              src="https://webd-assignment-1.vercel.app/assets/images/testimonial.svg"
              className="w-[600px] h-auto"
              alt=""
            />
          </div>
          <div className="flex flex-col  justify-start items-start gap-5  lg:w-1/2 ">
            <div className="gap-5">
              <div className="flex gap-2 items-center ">
                <h1 className=" text-black text-[28px] font-semibold font-clash capitalize leading-7">
                  the best financial accounting <br /> app ever!
                </h1>
              </div>
              <h1 className="lg:w-[535px] pt-6 opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </h1>
            </div>
            <div>
              <img
                src="https://webd-assignment-1.vercel.app/assets/images/testimonials2.svg"
                alt=""
              />
              <h1 className="text-black text-lg font-semibold font-clash capitalize leading-7">
                nick jonas
              </h1>
            </div>
          </div>

          <div className=" ">
            <Image src={star} className="bottom-5 opacity-50  h-10 w-10  " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testemonial;
