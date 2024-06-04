import React from "react";

export default function Circle() {
  return (
    <>
      {" "}
      <div class="w-[317px] h-[230px] relative">
        <div class="w-[290px] h-[153px] left-0 top-[77px] absolute bg-amber-200 rounded-full blur-[100px]"></div>
        <div class="w-[284px] h-[153px] left-[33px] top-0 absolute bg-rose-500 rounded-full blur-[100px]"></div>
      </div>
    </>
  );
}
