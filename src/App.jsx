import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [chatsData, setChat] = useState(messages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
  
        <ChatLog entries={chatsData}/>
        
      </main>
    </div>
  );
};

export default App;