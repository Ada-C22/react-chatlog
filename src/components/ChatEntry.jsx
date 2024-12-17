import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({entries}) => {
  const { id, sender, body, timeStamp, liked, onLikeToggle, owner} = entries;
  const senderLocation = (sender == owner) ? 'local' : 'remote';
  const className = `chat-entry ${senderLocation}`;

  const handleClick = () => {
    onLikeToggle(id);
  };

  return (
    <div className={className}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{TimeStamp(timeStamp)}</p>
        <button className="like" onClick={handleClick}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  entries: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  }),
  onLikeToggle: PropTypes.func.isRequired,
  owner: PropTypes.string
};

export default ChatEntry;
