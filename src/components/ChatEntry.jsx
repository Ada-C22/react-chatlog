import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  const toggleLikes = () => {
    setIsLiked(!isLiked);
    if (!isLiked) { // then it was previously unliked
      const newCount = 1;
      setCount(newCount); // then it was liked
      console.log(newCount);
    }
    else {
      const newCount = 0;
      setCount(newCount);
      console.log(newCount);
    }
  };
  const heart = isLiked ? '❤️': '🤍';
  const localOrRemote = props.sender == props.local ? 'chat-entry local' : 'chat-entry remote';
  const meOrYou = props.sender == props.local ? 'me: ': '';
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{meOrYou}{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}> </TimeStamp></p>
        <button className="hearts" onClick={toggleLikes}>{heart}</button>
      </section>
    </div>
  );
};
ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body:PropTypes.string,
  timeStamp: PropTypes.string.isRequired,
  local: PropTypes.string,
};

export default ChatEntry;
