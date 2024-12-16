import { useState } from 'react';
import data from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';


const countLikes = (entries) => {
  let counts = 0;
  for( let index = 0; index < entries.length; index++){
    if(entries[index].liked){
      counts++;
    }
  }
  return counts;
}

const App = () => {
  const [entries, setEntries ] = useState(data);
  const handleClick = (id) => {
    const updatedEntries = entries.map((entry) => entry.id === id ? {...entry, liked: !entry.liked} : entry);
    setEntries(updatedEntries);
  };
  return (
    <div id="App">
      <header>
        <h1>{`${countLikes(entries)} ❤️s`}</h1>
      </header>
      <main>
        <ChatLog entries={entries} handleClick={handleClick}/>
      </main>
    </div>
  );
};

export default App;
