import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";
import ThreeObject from "./ThreeObject";
import { useSpring } from "react-spring";
import Accordion from "react-spring-accordion";

export default function About() {

  return (
    <div>
      <ThreeObject />
      <div className="flex justify-between p-6 bg-tranparent w-screen h-full">
        <div className="border-r-2 border-gray-300 w-1/2">
          <p className="mt-3 text-xl text-white">Skills</p>
          <ul className="p-12 px-24 text-gray-200">
            <Accordion.Wrapper>
              <Accordion.Item>
                <Accordion.Heading className="clicker border border-white rounded p-2 hover:bg-gray-800 ">
                  Frontend
                </Accordion.Heading>
                <Accordion.Child className="text-gray-400">
                  React
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  jQuery
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Tailwind
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Axios
                </Accordion.Child>

                
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker border border-white rounded p-2 mt-3">
                  Backend
                </Accordion.Heading>

                <Accordion.Child className="text-gray-400">
                  Node
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Express
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Rails
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker border border-white rounded p-2 mt-3">
                  Databases
                </Accordion.Heading>

                <Accordion.Child className="text-gray-400">
                  PostgreSQL
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Firebase
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  MongoDB
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker border border-white rounded p-2 mt-3">UI/UX</Accordion.Heading>

                <Accordion.Child className="text-gray-400">
                  Figma
                </Accordion.Child>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Heading className="clicker border border-white rounded p-2 mt-3">
                  Unit Testing
                </Accordion.Heading>

                <Accordion.Child className="text-gray-400">
                  Cypress
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Mocha/Chai
                </Accordion.Child>
                <Accordion.Child className="text-gray-400">
                  Jest
                </Accordion.Child>
              </Accordion.Item>
            </Accordion.Wrapper>
          </ul>
        </div>
        <div className="w-3/4 p-4 flex flex-col items-center">
          <p className="text-xl text-white w-3/4 text-left">About</p>
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
