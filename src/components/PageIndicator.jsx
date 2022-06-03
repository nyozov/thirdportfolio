import { useState } from "react";

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
export default function pageIndicator({ projectsPage, setProjectsPage }) {
  return (
    <div className='w-full flex justify-center items-center absolute bottom-5'>

    <div className={`
      z-10 mt-6 text-shadow text-white flex justify-evenly w-1/4 md:w-2/12 p-2 items-center flex-row
      `
    }>
    
      <AiOutlineLeft  onClick={()=>setProjectsPage(1)} className='text-white mr-1 text-xl w-[15px] h-[15px] white-glassmorphism hover:border-gray-200'/>
      <div 
      onClick={()=>setProjectsPage(1)}
      
      className={projectsPage === 1 ? "bg-gray-300 w-[15px] h-[15px] rounded-full hover:border-gray-200 duration-150 cursor-pointer" : "white-glassmorphism w-[25px] h-[15px] rounded-full hover:border-gray-200 duration-150 cursor-pointer"}></div>
      <div
      onClick={()=>setProjectsPage(2)}
      className={projectsPage === 2 ? "bg-gray-300 w-[15px] h-[15px] rounded-full hover:border-gray-200 duration-150 cursor-pointer" : "white-glassmorphism w-[25px] h-[15px] rounded-full hover:border-gray-200 duration-150 cursor-pointer"} />
<AiOutlineRight onClick={()=>setProjectsPage(2)} className='text-white ml-1 text-xl w-[15px] h-[15px] white-glassmorphism hover:border-gray-200'/>
    </div>
    </div>
  );
}
