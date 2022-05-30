import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeObject from "./ThreeObject";

import Skills from "./Skills";

export default function About() {
  const [page, setPage] = useState("about");

  return (
    <div className="flex justify-center items-center flex-col">
      <div className='opacity-10'>

      <ThreeObject />
      </div>
      <div className="flex justify-between mt-1 p-6 white-glassmorphism w-[98vw] shadow rounded-lg md:w-3/4 w-screen h-full">
        <div className="w-1/2">
          <ul className="p-12 px-24 text-gray-600">
            <div
              onClick={() => setPage("about")}
              className={
                page === "about"
                  ? "clicker shadow-md white-glassmorphism text-white rounded p-2 "
                  : "clicker shadow-md white-glassmorphism text-gray-600 rounded p-2 "
              }
            >
              About
            </div>

            <div
              onClick={() => setPage("skills")}
              className={
                page === "skills"
                  ? "clicker shadow-md white-glassmorphism text-white rounded p-2 mt-3 "
                  : "clicker shadow-md white-glassmorphism text-gray-600 rounded p-2 mt-3"
              }
            >
              Skills
            </div>
          </ul>
        </div>
        <div>
          <div className="h-1/4 text-black border-2 rounded-full border-white w-[0px]" />
          {page === "about" && (
            <h2 className=" text-lg font-bold h-[75px] text-white -rotate-90">
              About
            </h2>
          )}

          {page === "skills" && (
            <h2 className=" text-lg w-[50px] font-bold h-[75px] text-white -rotate-90">
              Skills
            </h2>
          )}
          <div className="h-1/2 text-black border-2 rounded-full border-white w-[0px]" />
        </div>
        <div className="w-3/4 p-4 flex flex-col items-center">
          {page === "about" && (
            <motion.div
              className="w-full flex justify-center items-center"
              initial={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="w-3/4  font-thin text-gray-300 text-left mt-3">
                Hi ✋, my name is Nick and I am a full stack web developer based
                out of Toronto. I recently completed a web development course
                through Lighthouse Labs, and am now looking
              </p>
            </motion.div>
          )}
          {page === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
}
