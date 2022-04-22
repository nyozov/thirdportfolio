import logo from "./logo.svg";
import "./App.css";
import VideoBg from "./components/VideoBg";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Title from "./components/Title";
import Projects from './components/Projects'
import About from './components/About'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect } from 'react'


function App() {
  return (
    <div className="App bg-gradient">
       <VideoBg />
      <Parallax pages={2}  style={{ top: "0", left: "0" }}>
        <ParallaxLayer  factor={0.5} offset={0} speed={2.5}>
          <div>
          <Navbar />
          <Title/>


         
          </div>
        </ParallaxLayer>
    

        <ParallaxLayer
        className="flex justify-center border-2 border-white rounded-lg bg-filter-blur bg-transparent"
        factor={1}
          offset={0.5}
          speed={2}

        >
          <div>
          <About/>
          </div>
          </ParallaxLayer>
       

        <ParallaxLayer
        className="w-3/4 border-2 max-w-3/4 backdrop-blur"
        factor={1}
        offset={0.5}
        speed={0.5}
        style={{
         
        }}
        >
         
        </ParallaxLayer>

        <ParallaxLayer
        factor={1}
          offset={1}
          speed={2}
          style={{ backgroundColor: "blue" }}
        />
        <ParallaxLayer
        factor={1}
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Projects/>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
