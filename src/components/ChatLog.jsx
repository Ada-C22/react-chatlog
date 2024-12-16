import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, toggleLiked}) => {
  const entryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        toggleLiked={toggleLiked}
        key={entry.id}
      />);
  });
  return (
    <>
      <h2>Chat Log</h2>
      <ul>
        {entryComponents}
      </ul>
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
  toggleLiked: PropTypes.func.isRequired,
};
export default ChatLog;