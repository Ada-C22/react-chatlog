import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  }

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladinir and Estragon</h1>
        <p onClick={increaseLikes}>{likesCount}🤍s</p>
      </header>
      <main>
        {<ChatLog entries={messages}/>}
        {/* <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}/> */}
      </main>
    </div>
  );
};

export default App;
