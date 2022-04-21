import logo from "./logo.svg";
import "./App.css";
import VideoBg from "./components/VideoBg";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect } from 'react'


function App() {
const ref = useRef()



  return (
    <div className="App">
      <Parallax pages={2} ref={ref} style={{ top: "0", left: "0" }}>
        <ParallaxLayer ref={ref} offset={0} speed={2.5}>
          <div>
          <Navbar />


          <VideoBg />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div>About Me</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
