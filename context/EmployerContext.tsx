"use client"
import React, { createContext, useState } from 'react'
interface AppStateType{
    jobPostStage:number
    renumerations:string,
    tags:any,
    jobDescription:any
    postVideoMode:boolean|false
}
export const UserContext=createContext<any>({})
function EmployerContext({
    children
}:{children:React.ReactNode}) {

   
    
    const [appState,setAppState]=useState<AppStateType>({
        jobPostStage:1,
        renumerations:"",
        tags:"",
        jobDescription:"",
        postVideoMode:false

    })
   
  return (

    <UserContext.Provider
    //@ts-ignore
    value={{appState,setAppState}}>
{children}
    </UserContext.Provider>

    
  )
}

export default EmployerContext