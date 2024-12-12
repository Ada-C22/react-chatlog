import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = ({
  id,
  sender, 
  body, 
  timeStamp,
  likeCount,
  onLikeChat,
}) => {
  const onLikeClick = () => {
    onLikeChat(id);
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{timeStamp}</p>
        <button onClick={onLikeClick} className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  onLikeChat: PropTypes.func.isRequired
};

export default ChatEntry;
