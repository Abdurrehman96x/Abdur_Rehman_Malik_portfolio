'use client'

import { AnimatePresence, delay, } from "framer-motion"
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({children}) => {
    const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
        
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-200 to-red-200 " >
        <motion.div className="h-screen w-screen fixed bg-white/40 backdrop-blur-3xl text-gray-900 border-black rounded-b-[100px] z-40"
        animate ={{height :"0vh"}} 
        exit = {{height: "140vh"}}
        transition={{duration:0.3 , ease:"easeOut"}} />

        <motion.div className="fixed w-fit h-fit m-auto top-0 bottom-0 left-0 right-0 text-black text-8xl cursor-default z-50"
        initial ={{opacity: 1}} 
        animate ={{opacity:0}}
        exit={{opacity:0}} 
        transition={{duration:0.3 , ease:"easeOut"}} >
        {pathName.substring(1)}
        </motion.div>

        <motion.div className="h-screen w-screen fixed bg-white/40 backdrop-blur-3xl text-gray-900 border-black rounded-t-[100px] z-30"
        initial ={{height :"140vh"}} 
        animate = {{height: "0vh",transition:{delay:0.3}}}
         />
          <div className="h-24">
            <Navbar/>
          </div>

          <div className="h-[calc(100vh-6rem)]">{children} </div>
        </div> 
    </AnimatePresence>
    
  )
}

export default TransitionProvider
