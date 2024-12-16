import './App.css';
import ChatLog from './components/ChatLog';
import message from './data/messages.json';
import {useState} from 'react';

const App = () => {
  const [chatData, setChatData] = useState(message);
  const togglelikes = (id) => {
    setChatData( chatData => chatData.map(chat => {
      if (chat.id === id){
        return {...chat, liked: !chat.liked};
      }else {
        return chat;
      }
    }));
  };
  const totalLikes = chatData.filter((chat) => chat.liked).length;
  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <p>{totalLikes} ❤️s </p>
      </header>
      <main>
        <ChatLog entries={chatData} chatClicked={togglelikes}/>
      </main>
    </div>
  );
};

export default App;
