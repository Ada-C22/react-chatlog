import messages from './data/messages.json';
import ChatLog from './components/ChatLog';
import './App.css';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages}/>
      </main>
    </div>
  );
};

export default App;
