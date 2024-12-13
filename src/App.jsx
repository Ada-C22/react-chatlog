import "./App.css";
// import ChatEntry from './components/ChatEntry';
import ChatLog from "./components/ChatLog";
import data from "./data/messages.json";
import { useState } from "react";

const App = () => {
  const [chatData, setChatData] = useState(data);

  const sendersList = (chatData) => {
    for (sender in )
  }
  const handleLike = (id) => {
    setChatData((chatData) =>
      chatData.map((chat) => {
        if (chat.id === id) {
          return { ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      })
    );
  };

  const calcTotalCount = (chatData) => {
    let total = 0;
    for (const chat of chatData) {
      if (chat.liked) {
        total += chat.liked;
      }
    }
    return total;
  };

  const totalLikes = calcTotalCount(chatData);
  return (
    <div id="App">
      <header>
        <h1>Chat Between</h1>
        <h2>{totalLikes} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatData} onLike={handleLike}></ChatLog>
      </main>
    </div>
  );
};

export default App;
