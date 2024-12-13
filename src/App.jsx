import './App.css';
import CHATS from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(CHATS);

  const handleLikedMessages = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    }));
  };

  const likedCount = chatData.filter((chat) => chat.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chatroom: Name1 and Name2</h1>
        <section id='heartWidget'>
          <span className='widget'>{likedCount} ❤️s</span>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onLiked={handleLikedMessages} />
      </main>
    </div>
  );
};

export default App;
