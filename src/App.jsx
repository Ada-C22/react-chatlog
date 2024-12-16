import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';


// const samepleMessage = messages[0];

const App = () => {
  console.log(messages);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry 
          sender={samepleMessage.sender}
          body={samepleMessage.body}
          timeStamp={samepleMessage.timeStamp}
        ></ChatEntry>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
