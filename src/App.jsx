import './App.css';
import ChatLog from './components/ChatLog';
import ChatEntry from './components/ChatEntry';
import React from 'react';
import messages from './data/messages.json';


function App() {
  // const firstMessage = messages[0];  // Get the first message for testing


  return (
    <div id="App">
      <header>
        <h1>Chat between X and Y</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry
          sender={firstMessage.sender}
          body={firstMessage.body}
          timeStamp={firstMessage.timeStamp}
        /> */}
        <ChatLog
        //  {/* Wave 02: Render ChatLog component */}
          entries={messages}/>
      </main>
    </div>
  );
};

export default App;
