import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {
        /* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */
          <ChatLog entries={messages}/>
        }
      </main>
    </div>
  );
};

export default App;
