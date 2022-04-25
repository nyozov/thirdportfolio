import logo from "./logo.svg";
import "./App.css";
import VideoBg from "./components/VideoBg";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Title from "./components/Title";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import ScrollIndicator from "./components/ScrollIndicator";
import AnimatedCursor from "react-animated-cursor";



function App() {
 const parallax = useRef(null)

 



 
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
    duration: 2,
    delay: 0.5,
  }

  return (
    <div className="App bg-gradient">
        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255,255,255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.cursor-pointer'
      ]}
    />
      <VideoBg />
      <ScrollIndicator parallax={parallax}/>
      <Parallax pages={3} ref={parallax} style={{ top: "0", left: "0" }}>
        <motion.div
        
        className='h-screen w-screen flex justify-center items-center'
        initial={{ opacity: 0, x: -500 }}
        transition={{ delay: 1 }}
        animate={{ opacity: 1, x:0, duration:4}}
        >
        <ParallaxLayer factor={0.1} offset={0} speed={1} className='bg-about mt-[35vh] ml-[30vw] max-w-[350px]'/>
        </motion.div>
        <ParallaxLayer factor={1} offset={0} speed={2.5}>
          <motion.div
            initial={{ opacity:0 }}
            transition={spring}
            animate={{ opacity:1 }}

           className='h-screen w-screen'>
            <Navbar />
            <Title />
           
          </motion.div>
        </ParallaxLayer>
        <ParallaxLayer
          className="bg-white"
          factor={1}
          offset={1}
          speed={0.5}
        
        ></ParallaxLayer>
        <ParallaxLayer
          className="flex justify-center border-2 border-white rounded-lg  bg-transparent"
          factor={1}
          offset={1}
          speed={2}
        >
          
            <About />
        
        </ParallaxLayer>

      

        <ParallaxLayer
          factor={1}
          offset={2}
          speed={2}
          style={{ backgroundColor: "blue" }}
        />
        <ParallaxLayer
       
          factor={1}
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Projects />
        </ParallaxLayer>

        <Footer />
      </Parallax>
    </div>
  );
}

export default App;
