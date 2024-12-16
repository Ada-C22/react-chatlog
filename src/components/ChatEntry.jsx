import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({id, sender, body, timeStamp, liked, handleLikeToggle}) => {
  const localRemote = sender === 'Vladimir' ? 'local': 'remote';

  return (
    <div className={`chat-entry ${localRemote}`}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>
        <div className='entry-time'>
          <TimeStamp
            time={timeStamp}
          />
        </div>
        <button
          className="like"
          onClick={() => handleLikeToggle(id)}
        >{liked ? '❤️' : '🤍'}</button>
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
  handleLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;