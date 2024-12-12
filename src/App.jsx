import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatdata from './data/messages.json';
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        < ChatEntry />
        <ChatLog entries={chatdata} />

      </main>
    </div>
  );
};

export default App;
