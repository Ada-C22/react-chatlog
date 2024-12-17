import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';

const ChatEntry = ({ sender, body, timeStamp, liked, onLikeToggle, type }) => {
  return (
    <div className={`chat-entry ${type}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={onLikeToggle}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired, 
  onLikeToggle: PropTypes.func.isRequired, 
};

export default ChatEntry;


