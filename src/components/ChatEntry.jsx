import React from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = (props) => {
  const onClickLike = () => {
    props.onLike(props.id);
  };

  const heart = props.liked ? '❤️' : '🤍';
  const locateSender = () => {
    return (props.sender === 'Estragon')? 'remote': 'local';
  };
  return (
    <div className={`chat-entry ${locateSender()}`}>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p className={props.fontColor}>{props.body}</p>
        <p className='entry-time'>
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={onClickLike}>
          {heart}
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
  onLike: PropTypes.func,
  localSender: PropTypes.string,
  fontColor: PropTypes.string,
};

export default ChatEntry;