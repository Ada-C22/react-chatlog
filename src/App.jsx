import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'


// import data from messages.json
const LOG = messages;


const App = () => {
  const [entries, setEntries] = useState(LOG);

  // update chat entry => like change
  const toggleLike = (id) => {
    const updatedEntries = entries.map(entry => {
      if (entry.id === id) {
          // toggle like
          return {... entry, liked: !entry.liked};
      } else {
        // no change
        return entry;
      }
    });
    // update entries
    setEntries(updatedEntries);
  }

  const totalLikes = entries.filter(entry => entry.liked).length;
  
  return (
    <div id="App">
      <header>
        <h1>Chat Between {entries[0].sender} and {entries[1].sender} </h1>
        <h2 id="heartWidget">{totalLikes} ❤️s </h2>
      </header>
      <main>
        <div>
          <ChatLog 
            entries={entries}
            onLikeToggle={toggleLike}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
