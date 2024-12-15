import './App.css';
import ChatEntry from './components/ChatEntry';

const App = () => {
  const chatData = [
    {
      sender:'Vladimir',
      body:'why are you arguing with me',
      timeStamp:'2018-05-29T22:49:06+00:00'
    },
    {
      sender:'Estragon',
      body:'Because you are wrong.',
      timeStamp:'2018-05-29T22:49:33+00:00'
    }];
    const firstMessage = chatData[0]; 
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry sender={firstMessage.sender} body={firstMessage.body} timeStamp={firstMessage.timeStamp}/>
      </main>
    </div>
  );
};

export default App;
