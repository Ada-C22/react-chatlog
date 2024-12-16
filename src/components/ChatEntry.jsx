import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

import './ChatEntry.css';

const ChatEntry = (props) => {
  const{
    sender,
    body,
    id,
    liked,
    timeStamp,
    handleClick,
  } = props;
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like"onClick={() => handleClick(id)}>{liked ? '❤️' :'🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ChatEntry;
