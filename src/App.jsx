import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';



const App = () => {
  const [chatLiked, setChatLiked] = useState(messages);

  const clickLikedButtom = (id) => {
    setChatLiked(chat => {
      return chat.map(chat => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      });
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <div>{<ChatLog entries={chatLiked} onLiked={clickLikedButtom} />}</div>
      </main>

    </div>
  );
};

export default App;
