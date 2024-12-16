import './App.css';
import CHATS from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import DarkMode from './dark-mode/DarkMode';


const App = () => {
  const [chatData, setChatData] = useState(CHATS);
  const [theme, setTheme] = useState('App');

  const handleLikedMessages = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if (chat.id === id) {
        return { ...chat, liked: !chat.liked };
      } else {
        return chat;
      }
    }));
  };

  const toggleDarkMode = (mode) => {
    setTheme(mode);
  };

  const likedCount = chatData.filter((chat) => chat.liked).length;

  return (
    <div id={theme}>
      <header>
        <h1>Chatroom: {chatData[0].sender} and {chatData[1].sender}</h1>
        <section id='heartWidget'>
          <span className='widget'>{likedCount} ❤️s</span>
          <DarkMode currentTheme={theme} toggleTheme={toggleDarkMode}/>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onLiked={handleLikedMessages} />
      </main>
    </div>
  );
};

export default App;
