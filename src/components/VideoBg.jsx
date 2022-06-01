import torontoVideo from "../assets/toronto-video.mp4";

import { HiLocationMarker } from "react-icons/hi";

export default function VideoBg() {

 const imgUrl = 
"https://wallpaperaccess.com/full/4709159.jpg"  
  
  return (
    <div className="flex w-screen z-index-behind justify-center">
  
      {/* <video
        className="toronto-video absolute w-screen object-cover shadow-xl h-screen"
        muted
        loop
        autoPlay
        src={torontoVideo}
        type="video/mp4"
      /> */}

      <img src={imgUrl}
      
      className='toronto-video absolute w-screen object-cover h-screen'/>


   
    </div>
  );
}
