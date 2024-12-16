import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import messagesData from './data/messages.json';

const App = () => {
  const [messages, setMessages] = useState(messagesData);
  const [colors, setColors] = useState({
    Vladimir: '#ffffe0',  // Default yellow
    Estragon: '#e0ffff'   // Default blue
  });

  // Get unique participants
  const participants = [...new Set(messages.map(msg => msg.sender))];

  const updateLikeStatus = (messageId, newLikedStatus) => {
    setMessages(messages.map(message => {
      if (message.id === messageId) {
        return { ...message, liked: newLikedStatus };
      }
      return message;
    }));
  };

  const handleColorChange = (user, newColor) => {
    setColors(prevColors => ({
      ...prevColors,
      [user]: newColor
    }));
  };

  const totalLikes = messages.filter(message => message.liked).length;

  return (
    <div id="App">
      <header>
        <h1>Chat between {participants.join(' and ')}</h1>
        <p>{totalLikes} ❤️s</p>
        <div className="color-controls">
          {participants.map(user => (
            <ColorChoice
              key={user}
              user={user}
              currentColor={colors[user]}
              onColorChange={handleColorChange}
            />
          ))}
        </div>
      </header>
      <main>
        <ChatLog 
          entries={messages} 
          onUpdateLike={updateLikeStatus}
          colors={colors}
        />
      </main>
    </div>
  );
};

export default App;