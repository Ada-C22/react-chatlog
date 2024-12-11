import './App.css';
import ChatEntry from './components/ChatEntry';
import messagesData from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {messagesData.map((message, index) =>(
          <ChatEntry
            key={index}
            sender={message.sender}
            body={message.body}
            timeStamp={message.timeStamp} />
        ))}
      </main>
    </div>
  );
};

export default App;
