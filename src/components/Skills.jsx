import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="w-3/4 flex flex-col justify-start items-start"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
   

     
            
             
                            <h1 className="text-xl font-bold text-left text-gray-200">Frontend</h1>
                            <p className="mt-3 text-sm leading-1 text-left text-gray-400">A phrase is a short selection of words which when put together create a concept.</p>
                            <h1 className="text-xl mt-6 font-bold text-left text-gray-200">Backend</h1>
                            <p className="mt-3 text-sm leading-1 text-left text-gray-400">A phrase is a short selection of words which when put together create a concept.</p>
                            <h1 className="text-xl mt-6 font-bold text-left text-gray-200">Databases</h1>
                            <p className="mt-3 text-sm leading-1 text-left text-gray-400">A phrase is a short selection of words which when put together create a concept.</p>
                            <h1 className="text-xl mt-6 font-bold text-left text-gray-200">UI/UX</h1>
                            <p className="mt-3 text-sm leading-1 text-left text-gray-400">A phrase is a short selection of words which when put together create a concept.</p>
                            <h1 className="text-xl mt-6 font-bold text-left text-gray-200">Testing</h1>
                            <p className="mt-3 text-sm leading-1 text-left text-gray-400">A phrase is a short selection of words which when put together create a concept.</p>
                            
                           
                      
          
     
        
   

    </motion.div>
  );
}
