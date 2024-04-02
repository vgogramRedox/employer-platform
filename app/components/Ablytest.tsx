"use client"
import React, { useEffect, useState } from 'react'

import { useChannel } from 'ably/react'
function AblyTest() {
    
    const[messageText,setMessageText]=useState("")
    const[receivedMessages,setMessages]=useState<any>()
    const messageTextIsEmpty=messageText.trim().length==0
    let inputBox:any = null;
    let messageEnd:any = null;
  const{channel}=useChannel("demoChat",(message)=>{
    const history = receivedMessages;
    setMessages([...history,message])
  })
  
  const sendChatMessage=(messageText:any)=>{
    channel.publish({name:"chat-message",data:messageText})
    setMessageText("")
    inputBox.focus()
  }
  
  const handleFormSubmission = (event:any) => {
    event.preventDefault();
    sendChatMessage(messageText);
  }
  
  const handleKeyPress=(e:any)=>{
    if(e.charCode!==13 || messageTextIsEmpty) return
    sendChatMessage(messageText)
    e.preventDefault()
  }

useEffect(()=>{

})
//   const messages=receivedMessages?.map((message,i)=>{
//     const author =message.connectionId===alby.connection.id?"me":"other"
//     return<span key={i} className=" bg-slate-400 rounded " data-author={author}>{message.data} </span>
//   })
  console.log(receivedMessages)
  useEffect(()=>{
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  })
  return (
<>
<div className="w-full rounded">
    <div className={""}>
      {/* {messages} */}
      <div ref={(element) => { messageEnd = element; }}></div>
    </div>
    <form onSubmit={handleFormSubmission} className={"flex flex-col content-evenly"}>
      <textarea
        ref={(element) => { inputBox = element; }}
        value={messageText}
        placeholder="Type a message..."
        onChange={e => setMessageText(e.target.value)}
        onKeyPress={handleKeyPress}
        className={"min-h-20"}
      ></textarea>
      <button type="submit" className={"bg-primary-50 rounded text-white"} disabled={messageTextIsEmpty}>Send</button>
    </form>
  </div>
</>
  )
}

export default AblyTest