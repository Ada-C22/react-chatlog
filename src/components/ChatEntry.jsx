import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, id, liked, onLiked}) => {
  const heart = liked ? '❤️' :'🤍' ;

  const localOrRemote = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  const onLikeClicked = () => {
    onLiked(id);
  };

  return (
    <>
      <div className={localOrRemote}>
        <h2 className="entry-name">{sender}</h2>
        <section className="entry-bubble">
          <p>{body}</p>
          <p className="entry-time">
            <TimeStamp time = {timeStamp} />
          </p>
          <button
            className="like"
            onClick={onLikeClicked}>
            {heart}
          </button>
        </section>
      </div>
    </>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func,
};

export default ChatEntry;
