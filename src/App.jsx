import './App.css';
import ChatEntry from './components/ChatEntry';
import chatData from './data/messages.json';

const App = () => {
  const message = chatData.map((chat, index) => {
    return (
      <div key={index}>
        <ChatEntry
          sender={chat["sender"]}
          body={chat["body"]}
          timeStamp={chat["timeStamp"]}
        ></ChatEntry>
      </div>
    );
  });
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {message}
      </main>
    </div>
  );
};

export default App;
