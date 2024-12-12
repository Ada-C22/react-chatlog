import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';
import { useState } from 'react';

// Helper function to count total likes
const calculateTotalLikes = (chatData) => {
  let total = 0;
  for (const like of chatData) {
    total += like.liked;
  }
  return total;
};

const App = () => {
  const [likeData, setLikeData] = useState(chatData);

  const handleLikeData = (id) => {
    setLikeData(likeData => likeData.map(like => {
      if (like.id === id) {
        return { ...like, liked: !like.liked };
      }
      else {
        return like;
      }
    }));
  };

  const totalLikes = calculateTotalLikes(likeData);

  const formatLikes = (totalLikes) => {
    if (totalLikes > 0) {
      return `${totalLikes} ❤️s`;
    } else {
      return `${totalLikes} 🤍s`;
    }
  };

  return (
    <div id="App">
      <header>
        <h2>Chat between {chatData[0].sender} and {chatData[1].sender}</h2>
        <h2>{formatLikes(totalLikes)}</h2>
      </header>
      <main>
        <ChatLog entries={likeData} handleLike={handleLikeData} />
      </main>
    </div>
  );
};

export default App;
