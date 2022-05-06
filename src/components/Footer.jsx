import React from "react";

export default function Footer({ parallax }) {
  return (
    <div className="flex flex-col justify-center absolute bottom-0 bg-gray-800 w-screen h-[150px] text-gray-200 p-4">
      <div className="w-full p-2 flex justify-center">✌️</div>
      <div className="flex  justify-evenly w-full h-full items-center">
        <div className="flex justify-between px-4  w-[200px]">
          <p className="cursor-pointer hover:underline">LinkedIn</p>
          <p className="cursor-pointer hover:underline">Github</p>
          <p className="cursor-pointer hover:underline">Resume</p>
        </div>
      </div>
      <div className="flex justify-center w-full items-center">
        <div className="mt-[-72px] w-3/4 text-right">
          <p
            onClick={() => parallax.current.scrollTo(0)}
            className="text-2xl cursor-pointer text-shadow"
          >
            ^
          </p>
        </div>
      </div>
    </div>
  );
}
