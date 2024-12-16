import './App.css';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';
import React, {useState} from 'react';
import messages from './data/messages.json';


const App = () => {
  // const firstMessage = messages[0];  // Get the first message for testing
  const [entries, setEntries] = useState(messages);

  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) =>
      entry.id === id ? {...entry, liked: !entry.liked } : entry
    );
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>ChatLog App</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entries} onToggleLike={toggleLike}/>
      </main>
    </div>
  );
};

export default App;
