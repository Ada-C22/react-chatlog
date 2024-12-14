
import Chatlog from './components/ChatLog';
import messages from './data/messages';
import './App.css';

const App = () => {
  const senders = Array.from(new Set(messages.map(message => message.sender)));
  const chatHeader = `Chat between ${senders.join(' and ')}`;
  return (
    <div id="App">
      <header>
        <h1>{chatHeader}</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <Chatlog entries = {messages}/>
      </main>
    </div>
  );
};

export default App;
