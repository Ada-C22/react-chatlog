import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <main>
        <ChatLog entries={messages}/>
      </main>
    </div>
  );
};


export default App;
