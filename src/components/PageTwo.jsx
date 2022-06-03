import React from 'react'
import myProjects from './myProjects'
import { motion } from 'framer-motion'

export default function pageTwo() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    transition={{ delay: 0.1, duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
  

    
    className="md:mt-24 f-f-p">
    <div className=" flex justify-center w-full">
      <div className="flex flex-col items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
        <a href={myProjects[4].url} target="_blank">
          <div
            initial={{ y: 100 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="img-hover-zoom"
            role="img"
          >
            <img
              className=" focus:outline-none mr-2 mt-12 shadow w-[220px] md:w-[350px] cursor-pointer"
              src={myProjects[4].img}
              alt="scheduler image"
            />
          </div>
        </a>

        <div className="sm:ml-12  flex mt-16 p-2 md:p-0 text-left flex-col items-start md:mr-6">
          <h1 className="focus:outline-none text-md md:text-xl font-bold leading-3 text-white">
            TinyApp
          </h1>
          <div className="flex">
            {myProjects[5].badges.map((badge, index) => (
              <div
                key={index}
                className="border m-[2px] mt-2 border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
              >
                <div className="flex items-center">
                  <div
                    className={
                      badge === "Express"
                        ? "h-1 w-1 rounded-full bg-green-500 mr-1"
                        : "h-1 w-1 rounded-full bg-yellow-500 mr-1"
                    }
                  />
                  <span className="text-xs text-gray-100 font-normal">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="focus:outline-none text-gray-500 text-xs mt-1 md:mt-3 md:text-base leading-5">
            {myProjects[5].desc}{" "}
          </h2>
        </div>
        <div aria-label="transactions" role="img">
          <a href={myProjects[7].url} target="_blank">
            <div
              initial={{ y: 100 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="img-hover-zoom"
              role="img"
            >
              <img
                className=" focus:outline-none mr-2 mt-12 shadow w-[220px] md:w-[350px] h-[110px] md:h-[218px] object-cover cursor-pointer"
                src={myProjects[7].img}
                alt="therapify image"
              />
            </div>
          </a>
        </div>
        <img
          className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
          src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
          alt="line"
        />
      </div>
      <div className="flex flex-col items-center md:items-start mt-9 md:mt-0 p-2 md:p-0 md:pl-12   md:w-1/2">
        <div className="text-left border-white flex mt-0 md:mt-12 flex-col items-start w-11/12 md:w-8/12">
          <h1 className="focus:outline-none text-md md:text-xl font-bold leading-5 text-white">
            Scheduler
          </h1>
          <div className="flex">
            {myProjects[4].badges.map((badge, index) => (
              <div
                key={index}
                className="border m-[2px] mt-2 border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
              >
                <div className="flex items-center">
                  <div
                    className={
                      badge === "React"
                        ? "h-1 w-1 rounded-full bg-indigo-700 mr-1"
                        : "h-1 w-1 rounded-full bg-green-500 mr-1"
                    }
                  />
                  <span className="text-xs text-gray-100 font-normal">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="focus:outline-none text-gray-500 text-xs mt-3 md:text-base leading-5 ">
            {myProjects[4].desc}{" "}
          </h2>
          <div className="invisible md:visible border border-blue-300 w-1/4 ml-[-52px] mt-2 " />
        </div>
        <a href={myProjects[5].url} target="_blank">
          <div
            initial={{ y: 100 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="img-hover-zoom cursor-pointer"
            role="img"
          >
            <img
              className="focus:outline-none shadow mt-12 md:mt-6 w-[200px] md:w-[350px]"
              src={myProjects[5].img}
              alt="tinyapp image"
            />
          </div>
        </a>

        <div className="text-left border-white flex mt-12 flex-col items-start  w-11/12 md:w-8/12">
          <h1 className="focus:outline-none md:text-xl font-bold leading-5 text-white">
            EthSend
          </h1>
          <div className="flex">
            {myProjects[7].badges.map((badge, index) => (
              <div
                key={index}
                className="border m-[2px] mt-2 border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
              >
                <div className="flex items-center">
                  <div
                    className={
                      badge === "React"
                        ? "h-1 w-1 rounded-full bg-indigo-700 mr-1"
                        : "h-1 w-1 rounded-full bg-blue-500 mr-1"
                    }
                  />
                  <span className="text-xs text-gray-100 font-normal">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h2 className="focus:outline-none text-gray-500 text-xs mt-3 md:text-base leading-5">
            {myProjects[7].desc}
          </h2>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
