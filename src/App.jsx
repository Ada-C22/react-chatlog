import './App.css';
import Data from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

function App () {
  const [messageData, setMessageData] = useState(Data);

  const handleLiked = (id) => {
    setMessageData(messageData => messageData.map(message => {
      if (message.id === id) {
        return {...message, liked: !message.liked};
      } else {
        return message;
      };
    }));
  };

  const calcTotalLiked = (messageData) => {
    let total = 0;
    for (const message of messageData) {
      if (message.liked) {
        total += 1;
      }
    };
    return total;
  };

  const totalLiked = calcTotalLiked(messageData);

  return (
    <>
      <div id="App">
        <header>
          <h1>ChatLog</h1>
          <h2>{totalLiked}❤️s</h2>
        </header>
        <main>
          <ChatLog entries = {messageData} onLiked={handleLiked}/>
        </main>
      </div>
    </>
  );
};

export default App;
