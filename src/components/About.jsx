import { useState } from "react";
import { motion } from "framer-motion";

import Skills from "./Skills";

export default function About() {
  const [page, setPage] = useState("about");

  return (
    <div className="flex justify-center  white-glassmorphism md:max-w-[960px] items-center flex-col">
      <div className="flex mt-1 p-6  rounded-lg w-3/4  h-full">
        <div className="">
          <ul className="text-gray-600 flex justify-center p-2 flex-col w-full items-center">
            <div
              onClick={() => setPage("about")}
              className={
                page === "about"
                  ? "clicker shadow-md white-glassmorphism w-24 text-white rounded p-2 "
                  : "clicker shadow-md white-glassmorphism hover:border-gray-200 duration-150 w-24 text-gray-600 rounded p-2 "
              }
            >
              About
            </div>

            <div
              onClick={() => setPage("skills")}
              className={
                page === "skills"
                  ? "clicker shadow-md white-glassmorphism  w-24 text-white rounded p-2 mt-3 "
                  : "clicker shadow-md white-glassmorphism hover:border-gray-200 duration-150 w-24 text-gray-600 rounded p-2 mt-3"
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
          <div className="h-1/4 text-black border-2 rounded-full border-white w-[0px] opacity-60" />
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
          <div className="h-1/2 text-black border-2 rounded-full border-white opacity-60 w-[0px]" />
        </div>

        <div className="w-[98vw] max-w-[960px] p-4 flex flex-col items-center">
          {page === "about" && (
            <motion.div
              className=" flex flex-col w-full p-4"
              initial={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-xl font-bold text-left text-gray-200">
                Full Stack Developer + UI/UX Designer
              </h1>
              <p className="mt-3 text-sm leading-1 text-left text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </motion.div>
          )}
          {page === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
}
