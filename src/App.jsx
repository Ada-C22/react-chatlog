import './App.css';
import ChatLog from '/src/components/ChatLog';
import DATA from '/src/data/messages.json';
import { useState } from 'react';


function App() {
  const [entries, setEntries] = useState(DATA);
 


  const toggleLikeBtnClick= (id) => {
    // Refactoring to incorporate func passing state update
    const newEntries = entries.map(entry=>{
      if (entry.id == id){
        return {...entry, liked: !entry.liked};
      }
      else{
        return entry;
      }
    });
    setEntries(newEntries);
  };

  const totalLikesCount = entries.reduce((count, entry) => (entry.liked? count+1: count), 0);



  return (
    <div id="App">
      <header className='header-fonts'>
        <h1 >Chat Between Vladimir and Estragon</h1>
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
