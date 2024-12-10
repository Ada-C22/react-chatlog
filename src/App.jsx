import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <p>Hi</p>
        <ChatLog entries={messages}></ChatLog>
      </main>
    </div>
  );
};

export default App;
