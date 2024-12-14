import { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json'



const LOG = messages;


const App = () => {
  //const [chatEntry, setChatEntry] = useState(DATA);

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon </h1>
      </header>
      <main>
        <div>{<ChatLog entries={LOG}/>}</div>
      </main>
    </div>
  );
};

export default App;
