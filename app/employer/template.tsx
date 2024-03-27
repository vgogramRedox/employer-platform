"use client"
import React from 'react'
import {motion} from "framer-motion"

function Template({
    children
}:{
    children:React.ReactNode
}) {
  return (
    <motion.div
    initial={{ y:30,opacity:0}}
    animate={{y:0,opacity:1}}
    viewport={{
      once:true,
amount:"some"
    }}
    transition={{
        ease:'easeInOut',duration:0.85
    }}
    >
      {children}</motion.div>
  )
}

export default Template