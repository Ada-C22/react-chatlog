import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const chatEntryComponents = entries.map((chatEntry, index) => {
    return (
      <li key={index}>
        <ChatEntry
          sender={chatEntry.sender}
          body={chatEntry.body}
          timeStamp={chatEntry.timeStamp}>
        </ChatEntry>
      </li>
    );
  });
  return (
    <ul className='chatLog'>
      {chatEntryComponents}
    </ul>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    // liked: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default ChatLog;