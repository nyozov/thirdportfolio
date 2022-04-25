import React from "react";

export default function About() {
  return (
    <div className="flex justify-between p-6 bg-tranparent w-screen h-full">
      <div className='border-r border-gray-300 w-1/2'>
        <p className='text-xl text-white'>Skills</p>
        <ul className='p-2 py-12 text-gray-200'>
          <li className='mt-3'>Frontend</li>
          <li className='mt-3'>Backend</li>
          <li className='mt-3'>UI/UX</li>
          <li className='mt-3'>Unit Testing</li>
        </ul>
      </div>
      <div className='w-full'>
        <p className='text-xl text-white'>About</p>
        <p className='font-thin text-gray-200 mt-3'>
          Hi ✋, my name is Nick and I am a full stack web developer based out of Toronto.
          I recently completed a web development course through Lighthouse Labs, and am now looking

        </p>
      </div>
    </div>
  );
}
