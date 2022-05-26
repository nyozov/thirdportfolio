import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";
import ThreeObject from "./ThreeObject";
import { useSpring } from "react-spring";
import Accordion from "react-spring-accordion";

export default function About() {

  return (
    <div className='flex justify-center items-center flex-col'>
      <ThreeObject />
      <div className="flex justify-between mt-1 p-6 white-glassmorphism w-[98vw] shadow rounded-lg md:w-3/4 w-screen h-full">
        <div className="w-1/2">
          
          <ul className="p-12 px-24 text-gray-600">
            <Accordion.Wrapper>
              <Accordion.Item>
                <Accordion.Heading className="clicker shadow-md white-glassmorphism text-white rounded p-2 ">
                  Frontend
                </Accordion.Heading>
                <Accordion.Child className="text-gray-800">
                  React
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  jQuery
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Tailwind
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Axios
                </Accordion.Child>

                
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker shadow-md white-glassmorphism rounded p-2 mt-3">
                  Backend
                </Accordion.Heading>

                <Accordion.Child className="text-gray-800">
                  Node
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Express
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Rails
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker shadow-md white-glassmorphism rounded p-2 mt-3">
                  Databases
                </Accordion.Heading>

                <Accordion.Child className="text-gray-800">
                  PostgreSQL
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Firebase
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  MongoDB
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker shadow-md white-glassmorphism rounded p-2 mt-3">UI/UX</Accordion.Heading>

                <Accordion.Child className="text-gray-800">
                  Figma
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker shadow-md white-glassmorphism rounded p-2 mt-3">
                  Unit Testing
                </Accordion.Heading>

                <Accordion.Child className="text-gray-800">
                  Cypress
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Mocha/Chai
                </Accordion.Child>
                <Accordion.Child className="text-gray-800">
                  Jest
                </Accordion.Child>
              </Accordion.Item>
            </Accordion.Wrapper>
          </ul>
        </div>
        <div>

        <div className='h-1/4 text-black border-2 rounded-full border-white w-[0px]'/>
        <h2 className=' text-lg font-bold h-[75px] text-white -rotate-90'>About</h2>
        <div className='h-1/2 text-black border-2 rounded-full border-white w-[0px]'/>
        </div>
        <div className="w-3/4 p-4 flex flex-col items-center">
        
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
        </div>
      </div>
    </div>
  );
}
