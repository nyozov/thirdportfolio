import { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
export default function Title({scrollPosition}) {

  
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
    <div className="flex w-screen flex-col h-screen items-center justify-center ">
    <div className='flex z-index-behind flex-col h-full justify-center items-center absolute top-0'>
    <h1 className="text-white text-shadow font-bold text-3xl">
      <span className={`mt=[${scrollPosition}px]`}>F</span>ull Stack Web Developer
    </h1>
    <span className="text-white">/</span>
    <h1 className="text-white text-shadow text-2xl">UI/UX Designer</h1>
    <div className="flex z-20 mt-2 justify-center items-center w-screen text-white text-shadow text-xl">
      <HiLocationMarker className="w-8" />
      <h1 className="ml-[-5px]">Toronto</h1>
     
    </div>
    <div className='bg-button shadow-md text-white cursor-pointer p-2 px-4 mt-4 border border-transparent hover:border-gray-200'>My Resume</div>
    </div>
    
  </div>
  </div>
  )
}

