import './App.css';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import messageData from './data/messages.json';

const App = () => {
  const [entryData, setEntryData] = useState(messageData);

  const handleLikeEntry = (id) => {
    setEntryData(entryData => entryData.map(entry =>{
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };

  const calculateTotalLikes = (entryData) => {
    let total = 0;
    for (const entry of entryData) {
      if (entry.liked) {
        total += 1;
      }
    };
    return total;
  };

  const totalLikes = calculateTotalLikes(entryData);


  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>Total Number of Likes: {totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={entryData}
          onLikeEntry={handleLikeEntry}
        />
      </main>
    </div>
  );
};

export default App;
