import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const likedButtonClicked = () => {
    props.onLikedToggle(props.id);
  };

  const heartColor = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <div>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
          <button className="like" onClick={likedButtonClicked} >{heartColor}</button>
        </div>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  liked: PropTypes.bool.isRequired,
  onLikedToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
