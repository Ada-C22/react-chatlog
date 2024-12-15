import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeChat }) => {
  const onLikeClick = () => {
    onLikeChat(id);
  };

  const chatEntryClass = () => {
    if (sender === 'Vladimir') {
      return 'local';
    }
    else {
      return 'remote';
    }
  };

  return (
    <div className={`chat-entry ${chatEntryClass()}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button onClick={onLikeClick} className='like'>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeChat: PropTypes.func,
};

export default ChatEntry;
