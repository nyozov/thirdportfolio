import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center absolute bottom-0 bg-gray-800 w-screen  text-gray-200 p-6'
    >
      
      <div className='w-full p-2 flex justify-center'>
      ✌️
      </div>
      <div className='flex  justify-evenly w-full h-full items-center'>
       <div className='flex justify-between px-4  w-[200px]'>
        <p className='cursor-pointer hover:underline'>LinkedIn</p>
        <p className='cursor-pointer hover:underline'>Github</p>
        <p className='cursor-pointer hover:underline'>Resume</p>
        </div>
      </div>
      </div>
  )
}
