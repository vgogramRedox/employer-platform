import { useEffect, useState } from "react"

 const useIsMobile=()=>{
const [isMobile,setIsMobile]=useState<boolean>()
    useEffect(()=>{
const screenWidth= typeof window =="object"&& window.screen.width
Number(screenWidth)<1000 && setIsMobile(true)
    },[])

    return isMobile||false
}
export default useIsMobile