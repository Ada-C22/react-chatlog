import {useState} from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';


const ChatEntry = (props) => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    setLiked ((wasLiked) => {
      const newLiked = !wasLiked;
      setCount((prevCount) => (prevCount + 1));
      return newLiked;
    });
};
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}/>
        </p>
        <p>Likes: {count}</p>
        <button className="like" onClick={toggleLike}>
          {liked? '❤️': '🤍'}

        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};


export default ChatEntry;
