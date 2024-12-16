import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';
import PropTypes from 'prop-types';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateLike, color }) => {
  const messagesClass = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${messagesClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section 
        className="entry-bubble"
        style={color ? { backgroundColor: color } : {}}
      >
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button onClick={() => onUpdateLike(id, !liked)} className="like">
          {liked ? '❤️' : '🤍'}
        </button>
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
  onUpdateLike: PropTypes.func.isRequired,
  color: PropTypes.string
};

ChatEntry.defaultProps = {
  color: undefined
};

export default ChatEntry;