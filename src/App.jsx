import './App.css';
import messagesDataDefault from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messagesData, setMessageData] = useState(messagesDataDefault);
  // toggleLikes: id -> function
  // f will update messages array to add a new key of isLiked
  // use setMessageData on new array
  const toggleLikes = (messageId) => {
    const messages = messagesData.map(message => {
      if (message.id == messageId) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };
  

  return (
    <div id="App">
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onChatEntryToggleLikes={toggleLikes}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
