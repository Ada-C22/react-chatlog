import './App.css';
import ChatEntry from './components/ChatEntry';


const App = () => {
  const chatData = [
    {
      sender: 'Vladimir',
      body: 'why are you arguing with me',
      timeStamp: '2018-05-29T22:49:06+00:00'
    },
    {
      sender: 'Estragon',
      body: 'Because you are wrong.',
      timeStamp: '2018-05-29T22:49:33+00:00'
    },
    {
      sender: 'Vladimir',
      body: 'because I am what',
      timeStamp: '2018-05-29T22:50:22+00:00'
    },
    {
      sender: 'Estragon',
      body: 'A robot.',
      timeStamp: '2018-05-29T22:52:21+00:00'
    },
    {
      sender: 'Vladimir',
      body: 'how did you know',
      timeStamp: '2018-05-29T22:52:58+00:00'
    }];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={chatData[0].sender}
          body={chatData[0].body}
          timeStamp={chatData[0].timeStamp}
          liked={chatData[0].liked}
        />
          {/*{Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
