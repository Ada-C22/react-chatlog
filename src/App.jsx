import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';


const App = () => {
  const [entries, setEntries] = useState(messages);

  const handleLikeToggle = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          : entry
      )
    );
  };

  const likedCount = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Application</h1>
      </header>
      <main>
        <h2>{likedCount} ❤️s</h2>
        <ChatLog entries={entries} onLikeToggle={handleLikeToggle} />
      </main>
    </div>
  );
};

App.propTypes = {
  onLikeToggle: PropTypes.func.isRequired,
};

export default App;