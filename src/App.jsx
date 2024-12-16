import './App.css';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';
import React from 'react';
import messages from './data/messages.json';


const DATA = [
  {
    'sender': 'Vladimir',
    'body':'why are you arguing with me',
    'timeStamp':'2018-05-29T22:49:06+00:00',
  }
];

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
          sender={DATA[0].sender}
          body={DATA[0].body}
          timeStamp={DATA[0].timeStamp}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
