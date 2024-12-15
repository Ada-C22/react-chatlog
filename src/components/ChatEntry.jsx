import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLiked }) => {
  const like = liked ? '❤️' : '🤍';

  const onLikeClick = () => {
    onLiked(id);
  };

  const localOrRemote = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${localOrRemote}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className='message'>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={onLikeClick}>
          {like}
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
  onLiked: PropTypes.func,
};

export default ChatEntry;
