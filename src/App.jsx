import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';

const App = () => {
  // const message = chatData.map((chat, index) => {
  //   return (
  //     <div key={index}>
  //       <ChatEntry
  //         sender={chat["sender"]}
  //         body={chat["body"]}
  //         timeStamp={chat["timeStamp"]}
  //       ></ChatEntry>
  //     </div>
  //   );
  // });
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog chatData={chatData}></ChatLog>
      </main>
    </div>
  );
};

export default App;
