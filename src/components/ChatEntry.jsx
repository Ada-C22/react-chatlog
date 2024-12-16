import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({id, sender, body, timeStamp,liked, onLikeToggle}) => {

  const handleHeartClick = () => {
    onLikeToggle(id);
  };

  let isLocalUser = false

  if (sender === 'Vladimir') {
    isLocalUser = true;
  } 

  return (
    <div className={isLocalUser?'chat-entry local':'chat-entry remote'}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className='body'>{body}</p>
        <TimeStamp time = {timeStamp}></TimeStamp>
        <button 
          className='like' //className from test
          onClick={handleHeartClick}>
            {liked ? '❤️' : '🤍'}
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
  onLikeToggle: PropTypes.func.isRequired,
  
};

export default ChatEntry;
