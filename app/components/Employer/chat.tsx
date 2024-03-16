"use client"
import { useChannel, useConnectionStateListener } from "ably/react";
import { useState } from "react";

export default  function AblyPubSub() {
    const [messages, setMessages] = useState([]);
  
    useConnectionStateListener('connected', () => {
      console.log('Connected to Ably!');
    });
  
    // Create a channel called 'get-started' and subscribe to all messages with the name 'first' using the useChannel hook
    const { channel } = useChannel('get-started',  (message) => {
      //@ts-ignore
      setMessages(prev => [...prev, message]);
    });
  
    const test =async()=>{
      await channel.publish('greeting', 'hello!');
      console.log(test)
    }



    return (
      // Publish a message with the name 'first' and the contents 'Here is my first message!' when the 'Publish' button is clicked
      <div>
        <button onClick={() => { channel.publish('first', 'Here is my first message!') }}>
          Publish
        </button>
        {
          messages.map(message => {
            //@ts-ignore
            return <p key={message.id}>{message.data.body}</p>
          })
        }
      </div>
    );
  }