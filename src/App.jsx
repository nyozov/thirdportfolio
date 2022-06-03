import logo from "./logo.svg";
import "./App.css";
import VideoBg from "./components/VideoBg";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./components/ScrollIndicator";
import AnimatedCursor from "react-animated-cursor";
import Contact from "./components/Contact";
import { HiLocationMarker } from "react-icons/hi";

function App() {
  const parallax = useRef(null);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 2,
    delay: 0.5,
  };

  return (
    <div className="App overflow-y-hidden">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255,255,255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".cursor-pointer",
          ".clicker",
        ]}
      />
      <VideoBg />
      <ScrollIndicator parallax={parallax} />
      <Parallax
        className="parallax"
        pages={4}
        ref={parallax}
        style={{ top: "0", left: "0" }}
      >
        <motion.div
          className="h-screen w-screen relative"
          initial={{ opacity: 0, x: -500 }}
          transition={{ delay: 1 }}
          animate={{ opacity: 1, x: 0, duration: 4 }}
        >
          <ParallaxLayer
            factor={0.1}
            offset={0.02}
            speed={1}
            className="bg-transparent rounded-lg flex justify-center items-center flex-col max-w-[300px] m-auto absolute"
          >
            <span className="text-white text-xl text-shadow">+</span>
            <h1 className="text-white text-shadow text-2xl">UI/UX Designer</h1>
            <div className="flex z-20 mt-2 justify-center items-center w-screen text-white text-shadow text-xl">
              <HiLocationMarker className="w-8" />
              <h1 className="ml-[-5px]">Toronto</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            factor={0.1}
            offset={0.065}
            speed={1.5}
            className="z-50 rounded-lg flex justify-center items-center flex-col max-w-[300px] m-auto absolute"
          >
            <a
              href="https://resume.creddle.io/resume/dykdi4p41za"
              className="h-0"
              target="_blank"
            >
              {" "}
              <div className="z-60 dark-glassmorphism shadow-md text-white clicker p-2 px-4 mt-6  hover:border-gray-200 duration-150">
                My Resume
              </div>
            </a>
          </ParallaxLayer>
        </motion.div>
        <ParallaxLayer factor={1} offset={0} speed={2.5}>
          <motion.div
            initial={{ opacity: 0 }}
            transition={spring}
            animate={{ opacity: 1 }}
            className="h-screen w-screen"
          >
            <Navbar parallax={parallax} />
            <Title />
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer className="bg-about" factor={1} offset={1} speed={0.5}>
          {" "}
        </ParallaxLayer>
        <ParallaxLayer
          className="flex justify-center rounded-lg  "
          factor={1}
          offset={1}
          speed={2}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer factor={2.5} offset={2} speed={2} className="bg-about" />
        <ParallaxLayer factor={1.2} offset={2} speed={0.5}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer factor={1} offset={3} speed={2} className="bg-about" />
        <ParallaxLayer factor={0.5} offset={3.2} speed={0.5}>
          <Contact />
        </ParallaxLayer>
        <Footer parallax={parallax} />
      </Parallax>
    </div>
  );
}

export default App;
