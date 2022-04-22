import torontoVideo from "../assets/toronto-video.mp4";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function VideoBg() {
  return (
    <div className="flex w-screen justify-center">
    
      <video
        className="toronto-video fixed top-0 left-0 right-0 w-screen object-cover shadow-xl h-screen"
        muted
        loop
        autoPlay
        src={torontoVideo}
        type="video/mp4"
      />
    </div>
  );
}
