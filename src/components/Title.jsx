import { HiLocationMarker } from "react-icons/hi";
export default function Title() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex w-screen flex-col h-screen items-center justify-center ">
        <div className="flex z-index-behind flex-col h-full justify-center items-center absolute top-0">
          <h1 className="text-white text-shadow font-bold text-3xl">
            <span className="">F</span>ull Stack Web Developer
          </h1>
          <span className="text-white">/</span>
          <h1 className="text-white text-shadow text-2xl">UI/UX Designer</h1>
          <div className="flex z-20 mt-2 justify-center items-center w-screen text-white text-shadow text-xl">
            <HiLocationMarker className="w-8" />
            <h1 className="ml-[-5px]">Toronto</h1>
          </div>
        </div>
        <a href="https://resume.creddle.io/resume/dykdi4p41za" target="_blank">
          {" "}
          <div className="  white-glassmorphism shadow-md text-white clicker p-2 px-4 mt-6  hover:border-white">
            My Resume
          </div>
        </a>
      </div>
    </div>
  );
}
