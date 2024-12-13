import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry'


const ChatLog = ({chats, chatLikeClicked}) => {
  console.log(chats);
  const getIndividualChats = (chats) => {
    return chats.map((chatEntry) => {
      console.log(chatEntry);
      return (
        <ChatEntry 
          key={chatEntry.id}
          id={chatEntry.id}
          name={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          chatLikeClicked={chatLikeClicked}
        />
      );
    });
  };
  
  return ( <ul className="chat-log"> {getIndividualChats(chats)} </ul>);
};

ChatLog.propTypes ={
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender:PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp:PropTypes.string.isRequired,
      liked:PropTypes.bool.isRequired,
    })
  ).isRequired,
  chatLikeClicked:PropTypes.func.isRequired,
};


export default ChatLog;