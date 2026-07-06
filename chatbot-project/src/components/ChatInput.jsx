      import { useState } from 'react'
      import { Chatbot } from 'supersimpledev';
      import './ChatInput.css';
      import LoadingSpinnerGif from '../assets/loading-spinner.gif'
      export function ChatInput({chatMessages, setChatMessages}) {
        const [inputText, setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value)
  
        }
        
        async function sendMessage(){
          const newChatMessages= [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ]
                    setInputText('');
          setChatMessages([...newChatMessages,
            {
              message: <img src={LoadingSpinnerGif} className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
        
          const response = await Chatbot.getResponseAsync(inputText);
           setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
  
        }

        function clearMessages(){
          setChatMessages([]);
        }
        function keyCheck (event){
              if(event.key === 'Enter') sendMessage();
               if(event.key === 'Escape') setInputText('')
            }
        return (
         <div className="chat-input-container">  
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
              onKeyDown={keyCheck}
              className="chat-input"
            />
            <button onClick={sendMessage}
            className="send-button">Send</button>
            <button onClick = {clearMessages}
            className = "clear-button">Clear</button>
          </div>
        );
      }
