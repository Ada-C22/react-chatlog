import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onLiked}) => {
  const chatEntryComponents = entries.map((chatEntry) => {
    return (
      <ChatEntry
        key={chatEntry.id}
        sender={chatEntry.sender}
        body={chatEntry.body}
        timeStamp={chatEntry.timeStamp}
        id={chatEntry.id}
        liked={chatEntry.liked}
        onLiked={onLiked}>
      </ChatEntry>
    );
  });

  return (
    <div className='chat-log'>
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })).isRequired,
  onLiked: PropTypes.func,
};

export default ChatLog;