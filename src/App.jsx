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

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
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
