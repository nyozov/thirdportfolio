import { motion } from "framer-motion";
import backendImg from '../assets/backend-img.webp'
import frontendImg from '../assets/full_front_back.jpg'
import dbImg from '../assets/db-img.png'
import uiuxImg from '../assets/uiux-img.png'
import testingImg from '../assets/testing-img.png'

export default function Skills() {
  return (
    <motion.div
      className=" flex flex-col w-full p-4"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex w-full items-center">
        <img
          className="object-cover rounded-full w-10 h-10"
          src={frontendImg}
        />
        <h1 className="text-xl ml-1 p-1 px-2 blue-glassmorphism font-bold text-left text-gray-200">
          Frontend
        </h1>
      </div>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        React, JSX, TSX, Axios
      </p>
      <p className="mt-1 text-sm leading-1 text-left text-gray-400">
        CSS libraries - Tailwind, Material
      </p>
      <p className="mt-1 text-sm leading-1 text-left text-gray-400">
        Framer Motion, ThreeJs
      </p>
      <div className="flex w-full mt-3 items-center">
        <img
          className="object-cover rounded-full w-10 h-10"
          src={backendImg}
        />
        <h1 className="text-xl ml-1 p-1 px-2 blue-glassmorphism font-bold text-left text-gray-200">
          Backend
        </h1>
      </div>

      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        NodeJs, ExpressJs, Ruby on Rails
      </p>

      <div className="flex w-full mt-3 items-center">
        <img
          className="object-cover rounded-full w-10 h-10"
          src={dbImg}

        />
        <h1 className="text-xl ml-1 p-1 px-2 blue-glassmorphism font-bold text-left text-gray-200">
          Databases
        </h1>
      </div>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        MongoDB, Firebase, PostgreSQL
      </p>

      <div className="flex w-full mt-3 items-center">
        <img
          className="object-cover rounded-full w-10 h-10"
          src={uiuxImg}
        />
        <h1 className="text-xl ml-1 p-1 px-2 blue-glassmorphism font-bold text-left text-gray-200">
          UI/UX
        </h1>
      </div>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        Figma - design, prototypes, workflow
      </p>

      <div className="flex w-full mt-3 items-center">
        <img
          className="object-cover rounded-full w-10 h-10"
          src={testingImg}
        />
        <h1 className="text-xl ml-1 p-1 px-2 blue-glassmorphism font-bold text-left text-gray-200">
          Testing
        </h1>
      </div>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        Cypress, Mocha/Chai, Jest
      </p>
    </motion.div>
  );
}
