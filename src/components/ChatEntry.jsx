import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = ({id,sender,body,timeStamp,liked,chatClicked}) => {
  const heartColor = liked ? '❤️' : '🤍';
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p> {body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp}/>
        </p>
        <button className="like" onClick={() => chatClicked(id)}>{heartColor}</button>
      </section>
    </div>
  );
};
ChatEntry.propTypes = {
  // Fill with correct proptypes
  id:  PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.string.isRequired,
  chatClicked: PropTypes.func.isRequired,
};

export default ChatEntry;
