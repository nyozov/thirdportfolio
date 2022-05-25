import myProjects from "./myProjects";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";

const Projects = () => {
  const [more, setMore] = useState(false);
  return (
    <div classname="overflow-y-hidden">
      <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
        <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-shadow text-gray-200">
          Projects
        </h1>
        <div className="md:mt-24 f-f-p">
          <div className=" flex justify-center w-full">
            <div className="flex flex-col items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
              <motion.div
                initial={{ y: 100 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="img-hover-zoom"
                
                role="img"
              >
                <img
                  className=" focus:outline-none mr-2 mt-12 shadow w-[220px] md:w-[350px] cursor-pointer"
                  src={myProjects[0].img}
                  alt="gallery image"
                />
              </motion.div>

              <div className="sm:ml-16 flex mt-16 p-2 md:p-0 text-left flex-col items-start md:w-8/12">
                <h1 className="focus:outline-none text-md md:text-xl font-bold leading-3 text-white">
                  E-Tune
                </h1>
                <div className="flex">
                  {myProjects[1].badges.map((badge, index) => (
                    <div
                      key={index}
                      className="border m-[2px] mt-2 border-gray-300 dark:border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
                    >
                      <div className="flex items-center">
                        <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
                        <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">
                          {badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="focus:outline-none text-gray-500 text-xs mt-1 md:mt-3 md:text-base leading-5">
                  {myProjects[1].desc}{" "}
                </h2>
              </div>
              <div aria-label="transactions" role="img">
                <motion.div
                  initial={{ y: 100 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="img-hover-zoom"
                  
                  role="img"
                >
                  <img
                    className=" focus:outline-none mr-2 mt-6 shadow w-[220px] md:w-[350px] cursor-pointer"
                    src={myProjects[2].img}
                    alt="therapify image"
                  />
                </motion.div>
              </div>
              <img
                className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
                src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png"
                alt="line"
              />
            </div>
            <div className="flex flex-col items-center md:items-start mt-9 md:mt-0 p-2 md:p-0 md:pl-12 lg:border-gray-400  md:w-1/2">
              <div className="text-left border-white flex mt-0 md:mt-12 flex-col items-start w-11/12 md:w-8/12">
                <h1 className="focus:outline-none text-md md:text-xl font-bold leading-5 text-white">
                  Gallery
                </h1>
                <div className="flex">
                  {myProjects[0].badges.map((badge, index) => (
                    <div
                      key={index}
                      className="border m-[2px] mt-2 border-gray-300 dark:border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
                    >
                      <div className="flex items-center">
                        <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
                        <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">
                          {badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="focus:outline-none text-gray-500 text-xs mt-3 md:text-base leading-5 ">
                  {myProjects[0].desc}{" "}
                </h2>
                <div className="invisible md:visible border border-blue-300 w-1/4 ml-[-52px] mt-2 " />
              </div>
              <motion.div
                initial={{ y: 100 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="img-hover-zoom cursor-pointer"
                role="img"
              >
                <img
                  className="focus:outline-none shadow mt-6 w-[200px] md:w-[350px]"
                  src={myProjects[1].img}
                  alt="etune image"
                />
              </motion.div>
            

              <div className="text-left border-white flex mt-12 flex-col items-start  w-11/12 md:w-8/12">
                <h1 className="focus:outline-none md:text-xl font-bold leading-5 text-white">
                  Therapify
                </h1>
                <div className="flex">
                  {myProjects[2].badges.map((badge, index) => (
                    <div
                      key={index}
                      className="border m-[2px] mt-2 border-gray-300 dark:border-gray-700 h-6 w-18 p-2 md:p-0 md:h-8 md:w-24 md:mb-0 rounded-md flex items-center justify-center"
                    >
                      <div className="flex items-center">
                        <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
                        <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">
                          {badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <h2 className="focus:outline-none text-gray-500 text-xs mt-3 md:text-base leading-5">
                  {myProjects[2].desc}
                </h2>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center items-center">
        {!more && (
          <div
            onClick={() => setMore(true)}
            className="clicker border border-white font-semibold text-white p-3 hover:bg-gray-500 shadow-md flex bg-div justify-center w-36 items-center border-gray-200"
          >
            See More
          </div>
        )}
        {more && (
          <div
            onClick={() => setMore(false)}
            className="clicker border border-white font-semibold text-white p-3 hover:bg-gray-500 shadow-md flex bg-div justify-center w-36 items-center border-gray-200"
          >
            See Less
          </div>
        )}
      </div>
    </div>
  );
};
export default Projects;
