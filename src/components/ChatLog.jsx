import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatEntryComponents = entries.map((entry) => {
    return (
      <ChatEntry
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        key={entry.id}
      ></ChatEntry>
    );
  });

  return (
    <ul>
      {chatEntryComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  })).isRequired
};

export default ChatLog;
