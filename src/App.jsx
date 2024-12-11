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
        <p>
          <ChatEntry data={messagesData}></ChatEntry>
        </p>

      </main>
    </div>
  );
};

export default App;
