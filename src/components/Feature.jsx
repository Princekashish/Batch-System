import React from "react";
import Image from "next/image";
import star from "../../public/Image/Star 1.png";
// [#F2F2F2]

function Feature() {
  return (
    <section className=" lg:min-h-screen bg-[#F2F2F2] ">
      <div className="flex justify-around  flex-col lg:flex-row items-center lg:pl-10 lg:pr-10 p-10">
        <div>
          <img
            src="https://webd-assignment-1.vercel.app/assets/images/features.svg"
            className="lg:w-[600px] w-[750px] h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-center lg:justify-start items-start gap-5  lg:w-1/2 w-full">
          <div class="text-start">
            <h1 class=" text-rose-500 text-lg font-medium font-clash uppercase leading-7 tracking-[2.88px]">
              features
            </h1>
            <h1 class=" text-black text-5xl font-bold font-clash capitalize leading-[48px]">
              uifry premium
            </h1>
          </div>
          <div>
            <div className="flex gap-2 items-center ">
              <img
                src="https://webd-assignment-1.vercel.app/assets/icons/star.svg"
                alt=""
                className="w-[12px] h-[20px]"
              />
              <h1 className=" text-black text-lg font-semibold font-clash capitalize leading-7">
                budgeting intervals
              </h1>
            </div>
            <h1 className="lg:w-[638px]  opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h1>
          </div>
          <div>
            <div className="flex gap-2 items-center ">
              <img
                src="https://webd-assignment-1.vercel.app/assets/icons/wheel.svg"
                alt=""
                className="w-[12px] h-[20px]"
              />
              <h1 className=" text-black text-lg font-semibold font-clash capitalize leading-7">
                budgeting intervals
              </h1>
            </div>
            <h1 className="lg:w-[638px] opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h1>
          </div>
          <div>
            <div className="flex gap-2 items-center ">
              <img
                src="https://webd-assignment-1.vercel.app/assets/icons/cube.svg"
                alt=""
                className="w-[12px] h-[20px]"
              />
              <h1 className=" text-black text-lg font-semibold font-clash capitalize leading-7">
                budgeting intervals
              </h1>
            </div>
            <h1 className="lg:w-[638px] opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h1>
          </div>
        </div>
        {/* gradient */}
        <div className="relative left-0   top-5 ">
          <div className="w-[290px] h-[153px] right-5 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]"></div>
          <div className="w-[284px] h-[153px] right-5 top-0 absolute bg-rose-500 rounded-full blur-[100px]"></div>
        </div>
      </div>
      <div className="flex justify-around  flex-col lg:flex-row-reverse items-center pl-10  ">
        <div className="">
          <img
            src="https://webd-assignment-1.vercel.app/assets/images/features.svg"
            className="w-[600px] h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-center lg:justify-start items-start gap-5  lg:w-1/2 w-full">
          <div class="text-start">
            <h1 class="text-rose-500 text-lg font-medium font-clash uppercase leading-7 tracking-[2.88px]">
              advatnages
            </h1>
            <h1 class=" text-black text-4xl font-bold font-clash capitalize leading-[48px]">
              why choose Uifry?
            </h1>
          </div>
          <div className="">
            <div className="flex gap-2 items-center ">
              <img
                src="https://webd-assignment-1.vercel.app/assets/icons/star.svg"
                alt=""
                className="w-[12px] h-[20px]"
              />
              <h1 className=" text-black text-[28px] font-semibold font-clash capitalize leading-7">
                clever notifications
              </h1>
            </div>
            <h1 className=" pt-2 opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </h1>
          </div>
        </div>
        <div className="relative left-0   top-5 ">
          <div className="w-[290px] h-[153px] right-5 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]"></div>
          <div className="w-[284px] h-[153px] right-5 top-0 absolute bg-rose-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="flex justify-center absolute  items-center">
          <Image
            src={star}
            className="bottom-5 opacity-50  h-10 w-10 left-2 "
          />
        </div>
      </div>
      <div className="flex justify-around  flex-col lg:flex-row items-center pl-10 pr-10">
        <div>
          <img
            src="https://batch-system-ui-fry.vercel.app/dir/images/specs2.png"
            className="w-[600px] h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-col  justify-start items-start gap-5  lg:w-1/2 ">
          <div>
            <div className="flex gap-2 items-center ">
              <img
                src="https://webd-assignment-1.vercel.app/assets/icons/star.svg"
                alt=""
                className="w-[12px] h-[20px]"
              />
              <h1 className=" text-black text-[28px] font-semibold font-clash capitalize leading-7">
                fully customizable
              </h1>
            </div>
            <h1 className="lg:w-[562px]  pt-2 opacity-50 text-black text-lg font-medium font-clash capitalize leading-7">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
