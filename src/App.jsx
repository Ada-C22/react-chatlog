import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
// Example JSON Data
  const chatMessage = {
    // "id": 1,
    sender:'Vladimir',
    body:'why are you arguing with me?',
    timeStamp:'2018-05-29T22:49:06+00:00',
    // "liked": false
  };
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={chatMessage.sender}
          body={chatMessage.body}
          timeStamp={chatMessage.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
