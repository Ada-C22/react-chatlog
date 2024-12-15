import './App.css';
import ChatLog from './components/ChatLog';
import chatLogData from '../src/data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon<br /><br />0 🤍s</h1>
      </header>
      <main>
        <ChatLog entries={chatLogData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
