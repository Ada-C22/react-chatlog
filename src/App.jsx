import './App.css';
import ChatLog from '/src/components/ChatLog';
import DATA from '/src/data/messages.json';
import { useState } from 'react';


function App() {
  const [entries, setEntries] = useState(DATA);
  const [colors, setTextColor] = useState(DATA);

  const toggleLikeBtnClick= (id) => {
    // Refactoring to incorporate func passing state update
    setEntries(entries => entries.map(entry=>{
      if (entry.id == id){
        return {...entry, liked: !entry.liked};
      }
      else{
        return entry;
      }
    }));
  };

  const totalLikesCount = entries.reduce((count, entry) => (entry.liked? count+1: count), 0);

  const identifyAllChatMembers = () => {
    const senders = [...new Set(entries.map(entry => entry.sender))];
    let participant1 = '';
    let participant2 = '';
    for (const sender of senders) {
      if (!participant1) {
        participant1 = sender;
      }
      else if (participant1 && !participant2) {
        participant2 = sender;
      }
    };
    return `${participant1} and ${participant2}`;
  };


  return (
    <div id="App">
      <header className='header-fonts'>
        <h1 > Chat Between {identifyAllChatMembers()}</h1>
        <h2 className='likes-background-color'> {totalLikesCount} ❤️s</h2>
      </header>
      <main>
        {/* // Wave 01: Render one ChatEntry component */}
        {/* Wave 02: Render ChatLog component */}

        <ChatLog
          entries={entries}
          onLikeBtnToggle={toggleLikeBtnClick}
        />


      </main>
    </div>
  );
};
export default App;
