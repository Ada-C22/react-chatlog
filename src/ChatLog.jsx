import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Chat UI</h1>
      </header>
      <main className="message-container">
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;