import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'



const LOG = messages;

// export let GLOBAL_LIKE_COUNT = 0;


const App = () => {
  const [entries, setEntries] = useState(LOG);

  // update chat entry
  
  const toggleLike = (id) => {
    const updatedEntries = entries.map(entry => {
      if (entry.id === id) {
        
          // update like count if liked is true
          return {... entry, liked: !entry.liked};
        
      } else {
        // no change
        return entry;
      }
    });
    console.log('Updated entries:', updatedEntries);
    setEntries(updatedEntries);
  }

  const totalLikes = entries.filter(entry => entry.liked).length;
  

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
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
