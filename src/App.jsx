import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';


const App = () => {
  // const chatData = 
  //   {
  //     sender: 'Vladimir',
  //     body: 'why are you arguing with me',
  //     timeStamp: '2018-05-29T22:49:06+00:00'
  //   };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladinir and Estragon</h1>
      </header>
      <main>
        {<ChatLog entries={messages}/>}
        {/* <ChatEntry sender={chatData.sender} body={chatData.body} timeStamp={chatData.timeStamp}/> */}
      </main>
    </div>
  );
};

export default App;
