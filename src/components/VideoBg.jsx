import cyberBg from "../assets/cyber-bg.jpeg";

export default function VideoBg() {
  return (
    <div className="flex w-screen z-index-behind justify-center">
      {/* old video bg code */}
      {/* <video
        className="toronto-video absolute w-screen object-cover shadow-xl h-screen"
        muted
        loop
        autoPlay
        src={torontoVideo}
        type="video/mp4"
      /> */}

      <img
        src={cyberBg}
        className="toronto-video absolute w-screen object-cover h-screen"
      />
    </div>
  );
}
