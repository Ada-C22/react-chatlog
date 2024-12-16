import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry>
        </ChatEntry>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
