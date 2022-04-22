import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
export default function Title() {
  return (
    <div className="flex w-screen justify-center">
    <div className='flex z-index-behind flex-col h-full justify-center items-center align-center absolute top-0 max-h-[400px]'>
    <h1 className="text-white text-shadow font-bold text-3xl">
      Full Stack Web Developer
    </h1>
    <span className="text-white">/</span>
    <h1 className="text-white text-shadow text-2xl">UI/UX Designer</h1>
    <div className="flex mt-2 justify-center items-center w-screen text-white text-shadow text-xl">
      <HiLocationMarker className="w-8" />
      <h1 className="ml-[-5px]">Toronto</h1>
    </div>
    </div>
    
  </div>
  )
}

