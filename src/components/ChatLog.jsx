import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map(message => {
    return (
      <div key={message.id}>
        <ChatEntry sender={message.sender} body={message.body} timeStamp={message.timeStamp} local={props.local}></ChatEntry>
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
