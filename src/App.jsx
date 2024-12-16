import './App.css';
import ChatEntry from './components/ChatEntry';
// import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatMessages, setChatMessages] = useState(
    messages.map(message => ({ ...message, liked: false }))
  );

  const handleLikeToggle = (timestamp) => {
    setChatMessages(chatMessages.map(message =>
      message.timeStamp === timestamp
        ? { ...message, liked: !message.liked }
        : message
    ));
  };

  const totalLikes = chatMessages.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        {chatMessages.map((message) => (
          <ChatEntry
            key={message.timeStamp}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp}
            liked={message.liked}
            onLikeToggle={() => handleLikeToggle(message.timeStamp)}
          />
        ))}
      </main>
    </div>
  );
};

export default App;