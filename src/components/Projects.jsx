
import myProjects from "./myProjects"
import { motion } from 'framer-motion'

export default function Projects() {
  
  return (
    <div className='p-6 relative' >
      <div className='absolute h-full border-r h-[150px] top-12 left-[49.2vw]'> 

      </div>
      
      Projects
      <motion.div className=' px-6 h-[200px]'>
      <motion.img whileHover={{ x:50, rotate:-3, scale: 1.3 }} className='ml-12 w-1/3 cursor-pointer object-cover shadow-lg ' src={myProjects[0].img}/>

      </motion.div>

    </div>
  )
}
