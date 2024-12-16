import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLike}) => {
  const likedMessage = () =>{
    onLike(id);
  };

  const messageWithHeart = liked ? '❤️': '🤍';


  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="liked" onClick={likedMessage}>{messageWithHeart}</button>
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
  onLike: PropTypes.func.isRequired,
};

export default ChatEntry;
