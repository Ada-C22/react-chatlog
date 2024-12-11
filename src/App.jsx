import './App.css';
import messagesDataDefault from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorComponents from './components/ColorComponents';

const App = () => {
  const [messagesData, setMessageData] = useState(messagesDataDefault);
  const [likeCount, setLikeCount] = useState(0);
  const [localColor, setLocalColor] = useState('red');
  const [remoteColor, setRemoteColor] = useState('blue');
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
        <h1><span className={remoteColor}>{remote}</span> and <span className={localColor}>{local}</span> chat</h1>
        <div className='sub-header-container'>
          <ColorComponents name={remote} color={remoteColor}></ColorComponents>
          <h2>{likeCount} ❤️s</h2>
          <ColorComponents name={local} color={localColor}></ColorComponents>
        </div>
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
