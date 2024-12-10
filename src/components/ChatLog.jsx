import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const local = props.entries[0].sender;
  const chatComponents = props.entries.map(message => {
    return (
      <div key={message.id}>
        <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} local={local}></ChatEntry>
      </div>
    );
  });
  return (
    <>{chatComponents}</>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array,
  local: PropTypes.string,
};
export default ChatLog;
