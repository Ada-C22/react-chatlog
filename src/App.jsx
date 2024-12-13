import { useState } from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {

  //set the initial state for the msgs
  const [entries, setEntries] = useState(messages);

  const getLikedCount = () => {
    return entries.filter(entry => entry.liked).length;
  };

  const toggleLike = (id) => {
    setEntries(entries =>
      entries.map(entry =>  {
        if (entry.id === id) {
          return { ...entry, liked: !entry.liked };
        } else {
          return entry;
        }     
      })
    );
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>{getLikedCount()}❤️</h2>
      </header>
      <main>
        <ChatLog 
          entries={entries}
          onLikeToggle={toggleLike}
        />
    
      </main>
    </div>
  );
};

export default App;
