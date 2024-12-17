import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';


const App = () => {
  const [entries, setEntries] = useState(messages);

  // Function to toggle the 'liked' state
  const handleLikeToggle = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id
          ? { ...entry, liked: !entry.liked }
          : entry
      )
    );
  };

  // Calculate how many messages are liked
  const likedCount = entries.filter((entry) => entry.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat Application</h1>
      </header>
      <main>
        <h2>{likedCount} ❤️s</h2>
        {/* Pass the entries and the handleLikeToggle function to ChatLog */}
        <ChatLog entries={entries} onLikeToggle={handleLikeToggle} />
      </main>
    </div>
  );
};

App.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ),
  onLikeToggle: PropTypes.func.isRequired
};

export default App;