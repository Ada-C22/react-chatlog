import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, onLike, onUnlike}) => {
  return (
    <div>
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          onLike={onLike}
          onUnlike={onUnlike}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.elementType.isRequired),
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
};

export default ChatLog;
