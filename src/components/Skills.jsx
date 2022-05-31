import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className=" flex flex-col w-full p-4 border"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-xl font-bold text-left text-gray-200">Frontend</h1>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        React, JSX, TSX, Axios
      </p>
      <p className="mt-1 text-sm leading-1 text-left text-gray-400">
        CSS libraries - Tailwind, Material
      </p>
      <p className="mt-1 text-sm leading-1 text-left text-gray-400">
        Framer Motion, ThreeJs
      </p>
      <h1 className="text-xl mt-6 font-bold text-left text-gray-200">
        Backend
      </h1>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
       NodeJs, ExpressJs, Ruby on Rails
      </p>
      <h1 className="text-xl mt-6 font-bold text-left text-gray-200">
        Databases
      </h1>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        MongoDB, Firebase, PostgreSQL
      </p>
      <h1 className="text-xl mt-6 font-bold text-left text-gray-200">UI/UX</h1>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        Figma - design, prototypes, workflow
      </p>
      <h1 className="text-xl mt-6 font-bold text-left text-gray-200">
        Testing
      </h1>
      <p className="mt-3 text-sm leading-1 text-left text-gray-400">
        Cypress, Mocha/Chai, Jest
      </p>
    </motion.div>
  );
}
