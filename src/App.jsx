import React from 'react';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>❤️</h2>
      </header>
      <main>
        <ChatLog entries={messages} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
