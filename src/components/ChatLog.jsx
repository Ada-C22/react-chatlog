import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeChat }) => {
  const chatEntryComponents = entries.map((chatEntry, index) => {
    return (
      <li key={index}>
        <ChatEntry
          id={chatEntry.id}
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}
          liked={chatEntry.liked}
          onLikeChat={onLikeChat}>
        </ChatEntry>
      </li>
    );
  });
  return (
    <ul className='chatLog'>
      {chatEntryComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onLikeChat: PropTypes.func.isRequired,
};

export default ChatLog;