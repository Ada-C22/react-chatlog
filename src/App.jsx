import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import TimeStamp from './components/TimeStamp';

const App = () => {
  const {sender, body, timeStamp} = messages[0];
  // console.log(timeStamp);
  // console.log(TimeStamp(timeStamp));
  // console.log(sender);
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>Hi</p>
        <ChatEntry sender={sender} body={body} timeStamp={timeStamp} ></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
