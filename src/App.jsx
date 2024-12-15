import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';

const App = () => {
  const [entryData, setEntryData] = useState(data);

  const handleLikeStatus = (id) => {
    setEntryData(entryData => entryData.map(entry => {
      if (entry.id === id) {
        return {...entry, liked: !entry.liked};
      } else {
        return entry;
      }
    }));
  };

  const calculateTotalLikes = (entryData) => {
    return entryData.reduce((total, entry) => {
      return total + entry.liked;
    }, 0);
  };

  const totalLikes = calculateTotalLikes(entryData);

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between <span className='green'>{data[0].sender}</span> and <span className='blue'>{data[1].sender}</span>
        </h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog
          entries={entryData}
          onLiked={handleLikeStatus}
        />
      </main>
    </div>
  );
};

export default App;
