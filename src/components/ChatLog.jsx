import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries}) => {
  return (
    <div>
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.elementType.isRequired),
};

export default ChatLog;
