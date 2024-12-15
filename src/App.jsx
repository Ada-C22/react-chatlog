import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entries, setEntries] = useState(chatData);
  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setEntries(updatedEntries);
  };
  const likeCount = entries.reduce((total, entry) => {
    return entry.liked ? total + 1 : total;
  }, 0);
  return (
    <div id="App">
      <header>
        <h1>{likeCount} ❤️s</h1>
      </header>
      <main>
      <ChatLog entries={entries} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

export default App;
