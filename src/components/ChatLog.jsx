import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry'


const ChatLog = ({entries, chatLikeClicked, uniqueParticipants}) => {
  const getIndividualChats = (entries) => {
    return entries.map((chatEntry) => {
      return (
        <ChatEntry
          key={chatEntry.id}
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          chatLikeClicked={chatLikeClicked}
          uniqueParticipants={uniqueParticipants}
        />
      );
    });
  };
  
  return ( <ul className="chat-log"> {getIndividualChats(entries)} </ul>);
};

ChatLog.propTypes ={
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender:PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp:PropTypes.string.isRequired,
      liked:PropTypes.bool.isRequired,
    })
  ).isRequired,
  chatLikeClicked:PropTypes.func.isRequired,
  uniqueParticipants:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};


export default ChatLog;