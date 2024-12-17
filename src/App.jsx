import { useState } from 'react';
import ChatLog from './components/ChatLog';
import initialMessages from './data/messages';
import './App.css';

const App = () => {
  const senders = Array.from(new Set(initialMessages.map(initialMessage => initialMessage.sender)));
  const chatHeader = `Chat between ${senders.join(' and ')}`;

  const [messages, setMessages] = useState(initialMessages);

  const toggleLike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? { ...message, liked: !message.liked }
          : message
      )
    );
  };

  const getTotalLikes = () => {
    return messages.filter((message) => message.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>{chatHeader}</h1>
        <h2>{getTotalLikes()} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} toggleLike={toggleLike} />
      </main>
    </div>
  );
};

export default App;
