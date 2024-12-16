import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Vladmir and Estragon</h1>
      </header>
      <ChatLog entries={messages}/>
    </div>
  );
};

export default App;
