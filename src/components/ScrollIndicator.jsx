import React from "react";

export default function ScrollIndicator({parallax}) {
  return (
    <div className="z-10 text-white absolute left-4 h-screen flex justify-center items-center flex-col">
      <div
            onClick={() => parallax.current.scrollTo(0)}
       className="border border-white w-3 h-3 rounded-full bg-white"></div>
      <div 
             onClick={() => parallax.current.scrollTo(1)}
      className="mt-1 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
      <div
        onClick={() => parallax.current.scrollTo(2)}
       className="mt-1 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
      <div className="mt-1 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
    </div>
  );
}
