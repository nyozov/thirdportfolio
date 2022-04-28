
import myProjects from "./myProjects"
import { motion } from 'framer-motion'
import { ParallaxLayer } from "@react-spring/parallax";



const Projects = () => (
  <div classname="overflow-y-hidden bg-gray-100">
    <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
      <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-shadow text-gray-200">Projects</h1>
      <div className="md:mt-24 f-f-p">
        <div className=" md:flex justify-center w-full">
          <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
            
            <motion.div className="img-hover-zoom"  aria-label="sign up" role="img">
              <img className=" focus:outline-none mr-2 mt-10 shadow cursor-pointer" src={myProjects[0].img} alt="how it work" />
            </motion.div>

        
            <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5 text-white">E-Tune</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">{myProjects[1].desc} </h2>
            </div>
            <div aria-label="transactions" role="img">
              <img className="focus:outline-none mt-24" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
            </div>
            <img className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />
          </div> 
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
            
            
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5 text-white">Gallery</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">{myProjects[0].desc} </h2>
            </div>
            <motion.div className="img-hover-zoom cursor-pointer" aria-label="wallet" role="img">
              <img className="focus:outline-none mt-32" src={myProjects[1].img} alt />
            </motion.div>
            
            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
              <h1 className="focus:outline-none text-xl font-bold leading-5">Start your Transactions</h1>
              <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center w-full">
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg" alt="how it work" />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg4.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best .</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg5.svg" alt />
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg2.svg" alt />
          <div className="mt-10">
            <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
            <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
          </div>
          <img className="focus:outline-none my-10" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg" alt />
          <img className src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg6.svg" alt />
          <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
            <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your Transactions</h1>
            <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
          </div>
        </div>
      </div>
    </div>
  </div>








);
export default Projects;




