import { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, onLike, onUnlike}) => {
  const [buttonText, setButtonText] = useState('🤍');

  const onLikeClick = () => {
    if (buttonText === '🤍') {
      setButtonText('❤️');
      onLike();
    } else {
      setButtonText('🤍');
      onUnlike();
    }
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time ={timeStamp} /></p>
        <button className="like" onClick={onLikeClick}>{buttonText}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.elementType.isRequired,
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
};

export default ChatEntry;
