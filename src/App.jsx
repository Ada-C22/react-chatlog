import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const toggleLike = (id) => {
    setChatMessages(chatMessages => chatMessages.map(message => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    }));
  };

  const totalLikes = chatMessages.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>{totalLikes} 🤍s</h2>
      </header>
      <main>
        <ChatLog entries={chatMessages} onToggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
