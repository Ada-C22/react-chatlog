import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLikeToggle}) => {
  const alignmentClass = sender.toLowerCase() === 'vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${alignmentClass} ${liked ? 'liked' : ''}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button 
          className="like"
          onClick={() => onLikeToggle(id)}
        >
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
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
