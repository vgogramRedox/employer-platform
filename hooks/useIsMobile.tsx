import {  useLayoutEffect, useState } from "react"

 const useIsMobile=()=>{
const [isMobile,setIsMobile]=useState<boolean>()
    useLayoutEffect(()=>{
const screenWidth= typeof window ==="object"&& window.innerWidth
Number(screenWidth)<900 && setIsMobile(true)
    },[isMobile])

    return isMobile||false
}
export default useIsMobile