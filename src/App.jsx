import './App.css';
import ChatLog from './components/ChatLog';
import CHATDATA from './data/messages.json';
import { useState } from 'react';


const App = () => {
  const [chatData, setChatData] = useState(CHATDATA);

  const toggleLike = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if (chat.id === id) {
        return {...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    }));
  };

  const calculateTotalLikes = (chatData) => {
    return chatData.reduce((total, chat) => {
      return total + chat.liked;
    }, 0);
  };

  const totalLikes = calculateTotalLikes(chatData);


  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} onLike={toggleLike}/>
      </main>
    </div>
  );
};

export default App;
