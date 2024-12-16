import './App.css';
import ChatLog from './components/ChatLog';
import chatLogDataFromFile from '../src/data/messages.json';
import { useState } from 'react';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);

  const [chatLogData, setChatLogData] = useState(chatLogDataFromFile);

  const toggleChatEntryLiked = (chatEntryId) => {
    const chatLogDataAfterToggle = chatLogData.map(chatEntry => {
      if (chatEntry.id === chatEntryId) {
        if (chatEntry.liked) {
          setLikesCount(likesCount - 1);
        } else {
          setLikesCount(likesCount + 1);
        }
        return { ...chatEntry, liked: !chatEntry.liked };
      } else {
        return chatEntry;
      }
    });

    setChatLogData(chatLogDataAfterToggle);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between Vladimir and Estragon
          <br />
          <br />
          {likesCount} ❤️s
        </h1>
      </header>
      <main>
        <ChatLog entries={chatLogData} onToggleChatEntryLiked={toggleChatEntryLiked}></ChatLog>
      </main>
    </div>
  );
};

export default App;
