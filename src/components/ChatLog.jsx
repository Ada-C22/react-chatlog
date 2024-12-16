import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.jsx';
import './ChatLog.css';

const ChatLog = ({ entries, onToggleLike }) => {
  const chatEntryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onToggleLike={onToggleLike}
        key={entry.id}
      />
    );
  });

  return (
    <div className="chat-log">
      {chatEntryComponents}
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
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;
