import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onLikeToggle}) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeToggle={() => onLikeToggle(entry.id)}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;