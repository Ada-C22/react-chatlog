import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLiked }) => {
  const entryComponents = entries.map(entry => {
    return (
      <div key={entry.id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLiked={onLiked}
        />
      </div>
    );
  });

  return (
    <div className='chat-log'>
      {entryComponents}
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
  ),
  onLiked: PropTypes.func,
};

export default ChatLog;
