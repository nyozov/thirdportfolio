import React from "react";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";
import ThreeObject from './ThreeObject'

export default function About() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 0.5,
    delay: 0.1,
  }

  return (

    <div>
   
       <ThreeObject/>
    
    
    <div className="flex justify-between p-6 bg-tranparent w-screen h-full">
        <ParallaxLayer/>
      <div className="border-r border-gray-300 w-1/2">
        <p className="mt-3 text-xl text-white">Skills</p>
        <ul className="p-2 py-12 text-gray-200">
          <motion.div initial={{ opacity: 0, y: 100 }} transition={spring} whileInView={{ opacity: 1, y: 0 }}>
            <li className="mt-3">Frontend</li>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} transition={spring} whileInView={{ opacity: 1, y: 0 }}>
            <li className="mt-3">Backend</li>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }}  transition={spring} whileInView={{ opacity: 1, y: 0 }}>
            <li className="mt-3">UI/UX</li>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} transition={spring} whileInView={{ opacity: 1, y: 0 }}>
            <li className="mt-3">Unit Testing</li>
          </motion.div>
        </ul>
      </div>
      <div className="w-3/4 p-4 flex flex-col items-center">
        <p className="text-xl text-white w-3/4 text-left">About</p>
        <motion.div
       initial={{ opacity: 0, y: 100 }}
       transition={{delay: 0.1, duration: 0.5}}
       whileInView={{ opacity: 1, y: 0}}
      >

        <p className="w-3/4  font-thin text-gray-300 text-left mt-3">
          Hi ✋, my name is Nick and I am a full stack web developer based out
          of Toronto. I recently completed a web development course through
          Lighthouse Labs, and am now looking
        </p>
       </motion.div>

      </div>
    </div>
    </div>
  );
}
