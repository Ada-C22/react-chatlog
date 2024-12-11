import './App.css';
import messagesDataDefault from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [messagesData, setMessageData] = useState(messagesDataDefault);
  const [likeCount, setLikeCount] = useState(0);
  // toggleLikes: id -> function
  // f will update messages array to add a new key of isLiked
  // use setMessageData on new array
  const toggleLikes = (messageId) => {
    const messages = messagesData.map((message) => {
      if (message.id == messageId) {
        countNumberLikes(message);
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    });
    setMessageData(messages);
  };

  const countNumberLikes = (message) => {
    if (!message.liked) {
      setLikeCount(likeCount+1);
    } else if (message.liked) {
      setLikeCount(likeCount-1);
    }
  };

  const local = messagesData[0].sender;
  let remote;
  for (const message of messagesData) {
    if (message.sender != local) {
      remote = message.sender;
    }
  }

  return (
    <div id='App'>
      <header>
        <h1>{local} and {remote} chat</h1>
        <div>{likeCount} ❤️s</div>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onChatEntryToggleLikes={toggleLikes}
          local={local}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
