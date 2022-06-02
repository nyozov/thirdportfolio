import { useState } from "react";
export default function pageIndicator({ projectsPage, setProjectsPage }) {
  return (
    <div className='w-full flex justify-center items-center'>

    <div className={`
      z-10 mt-6 text-shadow text-white flex justify-evenly w-1/4 md:w-1/12 p-2 items-center flex-row
      `
    }>
    
      
      <div 
      onClick={()=>setProjectsPage(1)}
      
      className={projectsPage === 1 ? "bg-gray-300 w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer" : "white-glassmorphism w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer"}></div>
      <div
      onClick={()=>setProjectsPage(2)}
      className={projectsPage === 2 ? "bg-gray-300 w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer" : "white-glassmorphism w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer"} />
      <div 
      onClick={()=>setProjectsPage(3)}
      className={projectsPage === 3 ? "bg-gray-300 w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer" : "white-glassmorphism w-[12px] h-[12px] rounded-full hover:border-gray-200 duration-150 cursor-pointer"}></div>
    </div>
    </div>
  );
}
