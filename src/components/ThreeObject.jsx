import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import galleryImg from '../assets/preview-wide.png'



const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // Vertex Shader
  glsl`
    precision mediump float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    void main() {
      float wave = vWave * 0.05;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = ({img}) => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
   img
  ]);

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.4, 8, 8]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

const Scene = ({img}) => {
  return (
    <Canvas  camera={{ fov: 10, position: [0,0,5] }}>
      <Suspense fallback={null}>
        <Wave img={img} />
      </Suspense>
    </Canvas>
  );
};

// passes img url to threejs canvas
export default function ThreeObject() {
  return (
    <div className=" w-screen grid grid-rows-2 grid-flow-col gap-2">
    
      <Scene img={'https://miro.medium.com/max/1400/1*UvWOnSlWP7AbbOtSVUeHMg.png'} className=''/>
      <Scene img={'https://cdn.iconscout.com/icon/free/png-256/ruby-2752084-2284901.png'} className=''/>
   
      <Scene img={'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png'} className=''/>
      <Scene img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC3rW8XsouaS0ZcaBsSh7Da2J0YO3lioCR-0i9JbhUU37v_5SknvPzXBFHyzsM8tNlS8k&usqp=CAU'} className=''/>
      <Scene img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAhzSkKQ0GsVFcCT9qSsaHy_GohBdd0pFDA&usqp=CAU'} className=''/>
      <Scene img={'https://cdn.dribbble.com/users/3061686/screenshots/17599145/figma-logo-2_4x.png'} className=''/>
      <Scene img={'data:image/png;base64,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'} className=''/>
    </div>
  );
}
