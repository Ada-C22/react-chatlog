import { useState, useEffect } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import './App.css';


const App = () => {
  const [messagesData, setMessagesData] = useState(messages);
  const [likesCounter, setLikesCounter] = useState(0);
  const [participants, setParticipants] = useState([]);

  // This effect runs on mount. It lists all participants in the header and counts initial likes
  useEffect(() => {
    let likesCount = 0;
    const temp = [];
    for (const message of messagesData){
      if (!temp.includes(message.sender)){
        temp.push(message.sender);
      };
      if (message.liked) likesCount++;
    };

    setParticipants(() => [...temp]);
    setLikesCounter(likesCount);
  }, []);

  const owner = messagesData[0].sender;


  const toggleLike = id => {
    let likeAdjustment = 0;
    setMessagesData( messages => {
      return messages.map( message => {
        if (message.id === id) {
          likeAdjustment = message.liked ? - 1 : + 1;
          return {...message, liked: !message.liked};
        } else {
          return message;
        }
      });
    });
    setLikesCounter( (likesCounter) => likesCounter + likeAdjustment);
  };


  return (
    <div id="App">
      <header>
        <h1>Chat between {participants.join(' and ')}</h1>
        <h2 className='heartWidget'>Likes: {likesCounter}</h2>
      </header>
      <main>
        <ChatLog messagesData={messagesData} onLikeToggle={toggleLike} owner={owner}/>
      </main>
    </div>
  );
};

export default App;
