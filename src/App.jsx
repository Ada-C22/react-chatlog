import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // const {sender, body, timeStamp} = messages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>Hi</p>
        <ChatLog entries={messages}></ChatLog>
        {/* <ChatEntry sender={sender} body={body} timeStamp={timeStamp} ></ChatEntry> */}
      </main>
    </div>
  );
};

export default App;
