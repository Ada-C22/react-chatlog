import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLiked }) => {
  const onHeartClick = () => {
    onLiked(id);
  };

  const filledHeart = liked ? '❤️' : '🤍';

  const setMessageBubble = id%2 ? 'local' : 'remote';

  return (
    <>
      <div className={`chat-entry ${setMessageBubble}`}>
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">
            <TimeStamp time={timeStamp}></TimeStamp>
          </p>
          <button className="like" onClick={onHeartClick}>{filledHeart}</button>
        </section>
      </div>
    </>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
