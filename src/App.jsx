import './App.css';
import { useState } from 'react';
import messagesData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatData, setChatData] = useState(messagesData);

  const handleLikeChat = (id) => {
    setChatData(chatData => chatData.map(chat => {
      if (chat.id == id) {
        return {...chat, liked: !chat.liked};
      } else {
        return chat;
      }
    }));
  };

  const calculateTotalLikeCount = (chatData) => {
    let totalLikes = 0;
    for (const chat of chatData) {
      if (chat.liked === true){
        totalLikes += 1;
      }
    }
    return totalLikes;
  };

  const totalLikes = calculateTotalLikeCount(chatData);

  return (
    <div id="App">
      <header>
        <h1>Total Number of Likes: {totalLikes} ❤️s </h1>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLikeChat={handleLikeChat}/>
      </main>
    </div>
  );
};

export default App;
