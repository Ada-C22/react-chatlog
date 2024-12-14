import './App.css';
import ChatEntry from './components/ChatEntry';
import data from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const [messages, setMessages] = useState(data); 

  const totalLikes = messages.filter((message) => message.liked).length;

  const toggleLike = (id) => {
    const updatedMessages = messages.map((message) =>
      message.id === id ? { ...message, liked: !message.liked } : message
    );
    setMessages(updatedMessages);
  };
  const likeColor = totalLikes > 0 ? 'green' : 'red';

  return (
    <div id="App">
      <header>
        <h1 className={likeColor}>{totalLikes} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={messages} onLikeToggle={toggleLike} />
      </main>
    </div>
  );
};

App.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
};

export default App;
