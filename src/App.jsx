import './App.css';
import messageData from './data/messages.json';
import ChatLog from './components/ChatLog';

function App () {
  return (
    <>
      <div id="App">
        <header>
          <h1>ChatLog</h1>
        </header>
        <main>
          <ChatLog entries = {messageData}/>
        </main>
      </div>
    </>
  );
};

export default App;
