import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import {useState} from 'react';


const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const toggleLiked = (id) => {
    const data = chatData.map(chat => {
      if (chat.id === id) {
        return {...chat, liked: !chat.liked};
      }else {
        return chat;
      };
    });
    setChatData(data);
  };
  let likeCount = 0;
  for (const chat of chatData) {
    if (chat.liked){likeCount += 1};
  };
  return (
    <div id="App">
      <header>
        <h1>Chat between {chatData[0].sender} and {chatData[1].sender} </h1>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        {
          <ChatLog entries={chatData} toggleLiked={toggleLiked}/>
        /* Wave 01: Render one ChatEntry component
       Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
