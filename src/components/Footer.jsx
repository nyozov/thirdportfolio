import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.div
    initial={{opacity: 0,}}
    transition={{duration: 0.5, delay: 0.1}}
    whileInView={{opacity: 1,}}
    
    className='flex flex-col h-[75px] justify-center absolute bottom-0 bg-gray-800 w-screen  text-gray-200 p-6'
    >
      
      <div className='w-full p-2 flex justify-center'>
      ✌️
      </div>
      <div className='flex  justify-evenly w-full h-full items-center'>
       <div className='flex justify-between px-4  w-[200px]'>
       <a href="https://www.linkedin.com/in/nyozov/" target="_blank" >
        <p className='cursor-pointer hover:underline'>LinkedIn</p>
        </a>
        <a href="https://github.com/nyozov" target="_blank" >
        <p className='cursor-pointer hover:underline'>Github</p>
        </a>
        <a href="https://resume.creddle.io/resume/dykdi4p41za" target="_blank" >
        <p className='cursor-pointer hover:underline'>Resume</p>
        </a>
        </div>
      </div>
      </motion.div>
  )
}
