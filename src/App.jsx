import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';



function App() {
  const [chat, setChat] = useState(messages);

  const handleLikeButtom = (id) => {
    setChat(chat => {
      return chat.map(chat => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      });
    });
  };

  const calculateTotalLikeCount = (chat) => {
    return chat.reduce((total, chat) => {
      return total + (chat.liked ? 1 : 0);
    }, 0);
  };

  const totalLikes = calculateTotalLikeCount(chat);
  const localSender = messages[0].sender;
  let remoteSender = 'Unknown';

  for (const message of messages) {
    if (message.sender !== localSender) {
      remoteSender = message.sender;
      break; // Stop once other sender is found
    }
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Between {localSender} and {remoteSender}</h1>
        <section>
          <h1>{`${totalLikes} ❤️s`}</h1>
        </section>
      </header>
      <main>
        <div>{
          <ChatLog
            entries={chat}
            onLiked={handleLikeButtom}
            localSender={localSender}
            likes={totalLikes} />}

        </div>
      </main>

    </div>
  );
};

export default App;
