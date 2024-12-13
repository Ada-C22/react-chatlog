import './App.css';
// import ChatEntry from './components/ChatEntry.jsx';
import ChatLog from './components/ChatLog.jsx'
import chatsJson from './data/messages.json';
import { useState } from 'react';
import AppTitle from './components/AppTitle.jsx';



const App = () => {
  const [chatsData, setChatData] = useState(chatsJson);
  const [likeCount,setLikeCount] = useState(0)


  const handleLikeClicked = (id) => {
    setChatData((chatsData)=> chatsData.map((chatEntry) => {
      if (chatEntry.id === id) {
        if (chatEntry.liked === true) {
          setLikeCount(likeCount - 1);}
        else {
          setLikeCount(likeCount + 1);
        }
        return {...chatEntry, liked:!chatEntry.liked};
      } else {
        return chatEntry;
      }
    }));
  };

  return (
    <div id="App">
      <header>
        <AppTitle chatsData={chatsData}/>
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={chatsData} chatLikeClicked={handleLikeClicked}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
