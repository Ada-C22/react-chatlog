import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
// import { useState } from 'react';

const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';
  const handleLikeClick = () => {
    props.onLikeToggle(props.id);
  };
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className="like" onClick={handleLikeClick}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
