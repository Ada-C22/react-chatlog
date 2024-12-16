import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [chatsData, setChat] = useState(messages);

  const handleLikedMessage = (id) => {
    setChat(chatsData => chatsData.map(message => {
      if (message.id === id) {
        return { ...message, liked: !message.liked };
      } else {
        return message;
      }
    }));
  };

  const calculateTotalLikes = (chatsData) => {
    let total = 0;
    for (const message of chatsData) {
      if (message.liked === true) {
        total += 1;
      }
    }
    return total;
  };

  const totalLikes = calculateTotalLikes(chatsData);

  return (
    <div id="App">
      <header>
        <h1>Chat between {messages[0].sender} and {messages[1].sender} </h1>
      </header>
      <main>
        <h2>Total Number of Likes: {totalLikes} ❤️s</h2>
        <ChatLog entries={chatsData} onLike={handleLikedMessage}/>
      </main>
    </div>
  );
};

export default App;