import React from "react";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 2,
    delay: 0.8,
  }

  return (
    <div className="flex justify-between p-6 bg-tranparent w-screen h-full">
        <ParallaxLayer/>
      <div className="border-r border-gray-300 w-1/2">
        <p className="text-xl text-white">Skills</p>
        <ul className="p-2 py-12 text-gray-200">
          <motion.div initial={{ opacity: 0 }} transition={spring} whileInView={{ opacity: 1 }}>
            <li className="mt-3">Frontend</li>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} transition={spring} whileInView={{ opacity: 1 }}>
            <li className="mt-3">Backend</li>
          </motion.div>
          <motion.div initial={{ opacity: 0 }}  transition={spring} whileInView={{ opacity: 1 }}>
            <li className="mt-3">UI/UX</li>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} transition={spring} whileInView={{ opacity: 1 }}>
            <li className="mt-3">Unit Testing</li>
          </motion.div>
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <p className="text-xl text-white">About</p>
        <p className="font-thin text-gray-200 mt-3">
          Hi 👋, my name is Nick and I am a full stack web developer based out
          of Toronto. I recently completed a web development course through
          Lighthouse Labs, and am now looking
        </p>
      </div>
    </div>
  );
}
