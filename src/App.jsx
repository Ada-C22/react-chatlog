import { useState } from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleLikeToggle = (id) => {
    setChatMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? { ...message, liked: !message.liked }
          : message
      )
    );
  };

  const totalLikes = chatMessages.filter((message) => message.liked).length;
  const person1 = messages[0].sender;
  const person2 = messages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
        <h2>{`Chat between ${person1} and ${person2}`}</h2>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={chatMessages}
          onToggleLike={handleLikeToggle}
        />
      </main>
    </div>
  );
};

export default App;