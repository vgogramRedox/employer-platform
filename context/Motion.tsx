import { motion } from 'framer-motion'
import React from 'react'

function SlideInAnimation({children}:{
    children:React.ReactNode
}) {
  return (
    <motion.div 
    initial={{opacity:1,x:-10}}
    animate={{scale:1,opacity:1,x:0}}
    transition={{
    duration:0.3,
    delay:0.3
    }}>
        {children}
    </motion.div>
  )
}

export default SlideInAnimation