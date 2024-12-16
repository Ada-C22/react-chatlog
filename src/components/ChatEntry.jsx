import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = ({id, sender, body, timeStamp,liked, onLikeToggle}) => {

  // const buttonHeart = liked ? '❤️ ' : '🤍'; 

  const handleHeartClick = () => {
    console.log(`Heart clicked for ID: ${id}`);
    onLikeToggle(id);
    // setIsLiked((isLiked) => !isLiked);
    // GLOBAL_LIKE_COUNT += isLiked? 1: -1;
  };



  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className='body'>{body}</p>
        <TimeStamp time = {timeStamp}></TimeStamp>
        <button 
          className='like'
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
