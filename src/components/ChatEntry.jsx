import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const likeButtonCliked = () => {
    props.onLiked(props.id);
  };

  const heartColor = props.liked ? '❤️' : '🤍';
  const messageClass = props.sender === props.localSender ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${messageClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className='like' onClick={likeButtonCliked}>{heartColor}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func.isRequired,
  localSender: PropTypes.string.isRequired
};

export default ChatEntry;