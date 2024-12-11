import './App.css';
import messagesData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messagesData}/>
      </main>
    </div>
  );
};

export default App;
