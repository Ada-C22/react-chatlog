import "./App.css";
// import ChatEntry from './components/ChatEntry';
import ChatLog from "./components/ChatLog";
import data from "./data/messages.json";
import { useState } from "react";

const App = () => {
  const [chatData, setChatData] = useState(data);

  const senderList = [];
  const sendersList = (chatData) => {
    for (const chat of chatData) {
      if (!senderList.includes(chat.sender)) {
        senderList.push(chat.sender);
      }
    }
    let title = "";
    for (const sender of senderList) {
      title += `${sender} and `;
    }
    return title.slice(0, -5);
  };

  const sendersTitle = sendersList(chatData);
  const local = senderList[0];

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

  const calculateLikes = (chatData) => {
    let total = 0;
    for (const chat of chatData) {
      if (chat.liked) {
        total += chat.liked;
      }
    }
    return total;
  };

  const totalLikes = calculateLikes(chatData);

  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

  const T = () => {
    const divs = [];
    for (let i = 0; i < 6; i++) {
      const divClass = `${colors[i]} test`;
      divs.push(<div key={i} className={divClass}></div>);
    }
    return <div className="color-container">{divs}</div>;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {sendersTitle}</h1>
        <h2>test</h2>
        <h2>{totalLikes} ❤️s</h2>
        <h2>test</h2>
        <T />
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLike={handleLike}
          localSender={local}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
