import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onUpdateLike, colors }) => {
  return (
    <div className="chat-log">
      {entries.map((message) => (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          onUpdateLike={onUpdateLike}
          color={colors[message.sender]}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  // ... existing propTypes ...
  colors: PropTypes.objectOf(PropTypes.string).isRequired
};