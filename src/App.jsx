import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatData =
  {
    sender: 'Vladimir',
    body: 'why are you arguing with me',
    timeStamp: '2018-05-29T22:49:06+00:00'
  };
  const firstChat = chatData[0];

  return (
    <div id="App">
      <header>
        <h1>Chatlog</h1>
      </header>
      <main>
        <ChatEntry
          sender={firstChat.sender}
          body={firstChat.body}
          timeStamp={firstChat.timeStamp}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;