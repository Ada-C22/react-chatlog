import './App.css';
import messagesDataDefault from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import ColorComponents from './components/ColorComponents';

const App = () => {
  const [messagesData, setMessageData] = useState(messagesDataDefault);
  const [likeCount, setLikeCount] = useState(0);
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');

  const toggleLikes = (messageId) => {
    setMessageData((messages) => {
      return messages.map((message) => {
        if (message.id == messageId) {
          countNumberLikes(message);
          return { ...message, liked: !message.liked };
        } else {
          return message;
        }
      });
    });
  };

  const countNumberLikes = (message) => {
    if (!message.liked) {
      setLikeCount(likeCount + 1);
    } else if (message.liked) {
      setLikeCount(likeCount - 1);
    }
  };

  const local = messagesData[0].sender;
  let remote;
  for (const message of messagesData) {
    if (message.sender != local) {
      remote = message.sender;
    }
  }
  const setColorCallback = (color, status) => {
    if (status == 'remote') {
      setRemoteColor(color);
    } else if (status == 'local') {
      setLocalColor(color);
    }
  };

  return (
    <div id='App'>
      <header>
        <h1>
          <span className={remoteColor}>{remote}</span> and{' '}
          <span className={localColor}>{local}</span> chat
        </h1>
        <div className='sub-header-container'>
          <ColorComponents
            status='remote'
            name={remote}
            color={remoteColor}
            setColorCallback={setColorCallback}
          ></ColorComponents>
          <h2>{likeCount} ❤️s</h2>
          <ColorComponents
            status='local'
            name={local}
            color={localColor}
            setColorCallback={setColorCallback}
          ></ColorComponents>
        </div>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onChatEntryToggleLikes={toggleLikes}
          local={local}
          localColor={localColor}
          remoteColor={remoteColor}
          setColorCallback={setColorCallback}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
