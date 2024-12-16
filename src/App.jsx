import { useState } from 'react';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';


const App = () => {
  const [chatEntries, setChatEntries] = useState(messages);

  const numOfLikes = chatEntries.filter(entry => entry.liked).length;

  const updateChatEntryLike = (entryId) => {
    setChatEntries(chatEntries => chatEntries.map(entry => {
      return entry.id === entryId ? {...entry, liked: !entry.liked} : entry;
    }));
  };

  return (
    <div id="App">
      <header>
        <h1>Chat with Vladamir and Estragon</h1>
        <section>
          <h2
            className='widget'
            id='heartWidget'
          >{numOfLikes} ❤️s </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onLikedToggle={updateChatEntryLike}
        />
      </main>
    </div>
  );
};

export default App;
