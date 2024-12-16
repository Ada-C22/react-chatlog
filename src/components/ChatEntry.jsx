import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({message, onLikeToggle, owner}) => {
  const senderLocation = (message.sender == owner) ? 'local' : 'remote';
  const className = `chat-entry ${senderLocation}`;

  const handleClick = () => {
    onLikeToggle(message.id);
  };

  return (
    <div className={className}>
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p>{message.body}</p>
        <p className="entry-time">{TimeStamp(message.timeStamp)}</p>
        <button className="like" onClick={handleClick}>{message.liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  }),
  onLikeToggle: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired
};

export default ChatEntry;
