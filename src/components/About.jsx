import React from "react";

export default function About() {
  return (
    <div className="flex justify-between p-6 border border-red-400 bg-tranparent w-screen h-full">
      <div className='border-r border-gray-300 w-1/2'>
        <p className='text-gray-600'>Skills</p>
      </div>
      <div className='w-full'>
        <p className='text-gray-600'>About</p>
      </div>
    </div>
  );
}
