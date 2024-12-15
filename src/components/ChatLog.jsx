import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry.jsx';


const ChatLog = ({entries}) => {
  const ChatToEntry = (entries) => {
    return entries.map((entry) =>{
      return (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked} />
      );
    });
  };
  return (<ul className="chat-log">{ChatToEntry(entries)}</ul>);
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,})
  )
};

export default ChatLog;