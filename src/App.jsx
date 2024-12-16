import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const testMessageData = {
    'id': 1,
    'sender':'Vladimir',
    'body':'why are you arguing with me',
    'timeStamp':'2018-05-29T22:49:06+00:00',
    'liked': false
  }

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry>
          sender={testMessageData.sender}
          body={testMessageData.body}
          timeStamp={testMessageData.timeStamp}
        </ChatEntry>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
