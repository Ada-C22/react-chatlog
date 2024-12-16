import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';


const ChatLog = ({entries, onLikeEntry}) => {
  const entryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLikeEntry={onLikeEntry}
      />);
  });
  return (<ul className="chat-log">{entryComponents}</ul>);
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.shape(
        { time: PropTypes.string.isRequired }),
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onLikeEntry: PropTypes.func.isRequired
};

export default ChatLog;