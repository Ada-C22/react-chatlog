import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const localOrRemote = props.sender == props.local ? 'chat-entry local' : 'chat-entry remote';
  return (
    <div className={localOrRemote}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}> </TimeStamp></p>
        <button className="like">🤍</button>
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
