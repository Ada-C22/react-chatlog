import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


function App() {
  const [chatData, setChatData] = useState(messages);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLiked = (chatEntryId) => {
    setChatData(chats => {
      return chats.map(chat => {
        if (chat.id === chatEntryId) {
          if (chat.liked === false) {
            setLikesCount((likesCount) => likesCount + 1);
          } else {
            setLikesCount((likesCount)=> likesCount - 1);
          }
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      });
    });
  };
  console.log(likesCount);

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladinir and Estragon</h1>
        <p>{likesCount} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatData} onLikedToggle={toggleLiked} likesCount={likesCount}/>
      </main>
    </div>
  );
};

export default App;
