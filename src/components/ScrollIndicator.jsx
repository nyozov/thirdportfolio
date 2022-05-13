import { useState } from "react";

export default function ScrollIndicator({ parallax }) {
  console.log('current =', parallax.current)

  return (
    <div className="z-10 text-shadow text-white absolute left-4 h-screen flex justify-center items-center flex-col">
     <div>
       ^
     </div>
      <div
        onClick={() => parallax.current.scrollTo(0)}
        className="border border-white w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
      <div
        onClick={() => parallax.current.scrollTo(1)}
        className="mt-[5px] border border-white w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      />
      <div
        onClick={() => parallax.current.scrollTo(2)}
        className="mt-[5px] border border-white w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
      <div
        onClick={() => parallax.current.scrollTo(3)}
        className="mt-[5px] border border-white w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
        <div>
       ⌄
     </div>
    </div>
  );
}
