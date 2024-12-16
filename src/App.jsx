import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [counter, setCounter] = useState(0); // Initial counter set to 0

  const onLike = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const onUnlike = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const likes = counter + ' ❤️s';

  return (
    <div id="App">
      <header>
        <h2>{likes}</h2>
        <h1>Application title</h1>
      </header>
      <main>
        {
          <ChatLog
            entries={messages}
            onLike={onLike}
            onUnlike={onUnlike} />
        }
      </main>
    </div>
  );
};

export default App;
