import { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';



const chatData = {
  "id": 1,
  "sender":"Vladimir",
  "body":"why are you arguing with me",
  "timeStamp":"2018-05-29T22:49:06+00:00",
  "liked": false
}


const App = () => {
  //const [chatEntry, setChatEntry] = useState(DATA);

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}/>
      </main>
    </div>
  );
};

export default App;
