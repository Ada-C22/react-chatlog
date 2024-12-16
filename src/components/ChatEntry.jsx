
import './ChatEntry.css';
import TimeStamp from './TimeStamp';     //  TimeStamp is a separate component
import PropTypes from 'prop-types';
// import App from '../App';
import React from 'react';

const ChatEntry = ({id, sender, body, timeStamp, liked, onToggleLike}) => {
  const heartEmoji = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => onToggleLike(id)}>
          {heartEmoji}
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
  onToggleLike: PropTypes.func,
};

export default ChatEntry;
