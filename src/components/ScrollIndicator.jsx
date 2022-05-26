import { useState } from "react";

export default function ScrollIndicator({ parallax }) {
  console.log('current =', parallax.current)

  return (
    <div className="invisible md:visible z-10 text-shadow text-white absolute left-4 h-screen flex justify-center items-center flex-col">
     <div>
       ^
     </div>
      <div
        onClick={() => parallax.current.scrollTo(0)}
        className="white-glassmorphism w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
      <div
        onClick={() => parallax.current.scrollTo(1)}
        className="mt-[5px] white-glassmorphism w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      />
      <div
        onClick={() => parallax.current.scrollTo(2)}
        className="mt-[5px] white-glassmorphism w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
      <div
        onClick={() => parallax.current.scrollTo(3)}
        className="mt-[5px] white-glassmorphism w-[10px] h-[10px] rounded-full hover:bg-gray-300 cursor-pointer"
      ></div>
        <div>
       ⌄
     </div>
    </div>
  );
}
