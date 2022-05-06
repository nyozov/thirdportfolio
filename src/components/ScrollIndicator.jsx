import { useState } from 'react';

export default function ScrollIndicator({parallax}) {

  const [page, setPage] = useState(0)
  return (
    <div className="z-10 text-white absolute left-4 h-screen flex justify-center items-center flex-col">
      <div
            onClick={() => parallax.current.scrollTo(0)}
       className="border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
      <div 
             onClick={() => parallax.current.scrollTo(1)}
      className="mt-2 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"
      
      />
      <div
        onClick={() => parallax.current.scrollTo(2)}
       className="mt-2 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
      <div 
      onClick={() => parallax.current.scrollTo(3)}
      className="mt-2 border border-white w-3 h-3 rounded-full hover:bg-gray-300 cursor-pointer"></div>
    </div>
  );
}
