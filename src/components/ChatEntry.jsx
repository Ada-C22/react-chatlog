import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLiked = () => {
    setIsLiked(!isLiked);
  };

  const heartColor = isLiked ? 'red' : 'grey';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <div>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
          <button className="like" onClick={toggleLiked}>{isLiked ? '❤️' : '🤍'}</button>
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
  liked: PropTypes.bool
};

export default ChatEntry;
