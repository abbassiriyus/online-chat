import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from 'react';
const socket=io.connect('http://localhost:3001');
function App() {
  const [message,setMessage]=useState('')
  const [messageF,setMessageF]=useState('')

  const sendMessage=()=>{
   socket.emit('send_message',{message:message})
  }
useEffect(()=>{
socket.on('receive_message',(data)=>{
  setMessageF(data.message)
  // console.log(data.message);
})
},[socket])

  return (
    <div className="App">
  <input placeholder="Message..." onChange={(event)=>{setMessage(event.target.value)}} />
  <button onClick={sendMessage}>Send Message</button>
  <h1>Message: {messageF} </h1>
    </div>
  );
}

export default App;
