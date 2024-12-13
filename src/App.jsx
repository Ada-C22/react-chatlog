import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const toggleLike = (id) => {
    setChatEntries((previousEntries) => 
      previousEntries.map((entry) => 
        entry.id == id ? {...entry, liked: !entry.liked } : entry
      )
    );
  };

  const totalLikes = chatEntries.filter((entry) => entry.liked).length;
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={chatEntries} onLikeToggle={toggleLike}/>
      </main>
    </div>
  );
};


export default App;
