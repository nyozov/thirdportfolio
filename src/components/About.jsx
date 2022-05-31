import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeObject from "./ThreeObject";

import Skills from "./Skills";

export default function About() {
  const [page, setPage] = useState("about");

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="opacity-50">
       
        {/* <ThreeObject /> */}
      </div>
      <div className="flex mt-1 p-6 white-glassmorphism shadow rounded-lg w-3/4  h-full">
        <div className="">
          <ul className="text-gray-600 flex justify-center p-2 flex-col w-full items-center">
            <div
              onClick={() => setPage("about")}
              className={
                page === "about"
                  ? "clicker shadow-md white-glassmorphism hover:bg-gray-500 w-24 text-white rounded p-2 "
                  : "clicker shadow-md white-glassmorphism hover:bg-gray-500 w-24 text-gray-600 rounded p-2 "
              }
            >
              About
            </div>

            <div
              onClick={() => setPage("skills")}
              className={
                page === "skills"
                  ? "clicker shadow-md white-glassmorphism hover:bg-gray-500 w-24 text-white rounded p-2 mt-3 "
                  : "clicker shadow-md white-glassmorphism hover:bg-gray-500 w-24 text-gray-600 rounded p-2 mt-3"
              }
            >
              Skills
            </div>
            {/* <div
              onClick={() => setPage("education")}
              className={
                page === "education"
                  ? "clicker shadow-md white-glassmorphism hover:bg-gray-500 text-white rounded p-2 mt-3"
                  : "clicker shadow-md white-glassmorphism hover:bg-gray-500 text-gray-600 rounded p-2 mt-3"
              }
            >
              Education
            </div> */}
          </ul>
        </div>
        <div>
          <div className="h-1/4 text-black border-2 rounded-full border-white w-[0px]" />
          {page === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className=" text-lg w-[50px] font-bold h-[75px] text-white -rotate-90">
                About
              </h2>
            </motion.div>
          )}

          {page === "skills" && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className=" text-lg w-[50px] font-bold h-[75px] text-white -rotate-90">
                Skills
              </h2>
            </motion.div>
          )}
          <div className="h-1/2 text-black border-2 rounded-full border-white w-[0px]" />
        </div>


        <div className="w-[98vw] max-w-[960px] p-4 flex flex-col items-center">
          {page === "about" && (
            <motion.div
              className="w-full flex justify-center items-center border"
              initial={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="mt-3 text-sm leading-1 text-left text-gray-400">
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
