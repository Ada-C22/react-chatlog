import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';


const App = () => {
  console.log('Messages data:', messagesData);
  return (
    <div id="App">
      <header>
        <h1>Chat log</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={messagesData} />
      </main>
    </div>
  );
};

export default App;
