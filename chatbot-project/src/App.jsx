import { useState, useEffect} from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev';

import './App.css'

     function App() {
      const [chatMessages, setChatMessages]  =  useState([JSON.parse(localStorage.getItem('messages')) || []]);
        useEffect(() =>{
          Chatbot.addResponses({
            'test': 'The test is successful!'

          })
        }, [])
        useEffect(() =>{
          localStorage.setItem('messages', JSON.stringify(chatMessages))
        })
       return (
        <div className = "app-container">
          <p className="welcome-message">{chatMessages.length===0 ? "Welcome to the chatbot project! Send a message using the textbox below." : ""}</p>
          <ChatMessages 
          chatMessages={chatMessages} />
          <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages} />
        </div>
      );
      }

export default App
