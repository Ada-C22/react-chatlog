import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const local = messages[0].sender;
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>Hi</p>
        <ChatLog entries={messages} local={local}></ChatLog>
      </main>
    </div>
  );
};

export default App;
