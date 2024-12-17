import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import messages from '../data/messages';

const localUser = messages.length > 0 ? messages[0].sender : null;
const ChatLog = ({ entries, toggleLike }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeToggle={() => toggleLike(entry.id)}
          type={entry.sender === localUser ? 'local' : 'remote'}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default ChatLog;