import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatData, setChatData] = useState(data);
  const [fontColor, setFontColor] = useState(null);

  const senderList = [];
  const sendersList = (chatData) => {
    for (const chat of chatData) {
      if (!senderList.includes(chat.sender)) {
        senderList.push(chat.sender);
      }
    }
    let title = '';
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

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const onFontColor = (color) => {
    setFontColor(color);
  };
  const Colors = () => {
    const divs = [];
    for (let i = 0; i < colors.length; i++) {
      const divClass = `${colors[i]} test`;
      divs.push(
        <div
          key={i}
          className={divClass}
          style={{
            backgroundColor: colors[i],
          }}
          onClick={() => onFontColor(colors[i])}
        ></div>
      );
    }
    return <div className='color-container'>{divs}</div>;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between {sendersTitle}</h1>
        <div className="color-selection-container">
          <h2>{totalLikes} ❤️s</h2>
          <div className="color-selection-group">
            <h2>Select Color:</h2>
            <Colors />
          </div>
        </div>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLike={handleLike}
          localSender={local}
          fontColor={fontColor}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
