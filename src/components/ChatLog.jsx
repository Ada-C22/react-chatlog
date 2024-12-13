import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeChat }) => {
  return (
    <div>
      {entries.map((chat) => (
        <ChatEntry
          key={chat.id}
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
          likeCount={chat.likeCount}
          onLikeChat={onLikeChat}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  messageData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
  })).isRequired,
  onLikeChat: PropTypes.func.isRequired
};

export default ChatLog;