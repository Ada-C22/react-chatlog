import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const local = props.entries[0].sender;
  const chatComponents = props.entries.map((message, index) => {
    return (
      <div key={index}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          toggleLikes={props.onChatEntryToggleLikes}
          local={local}
        ></ChatEntry>
      </div>
    );
  });
  return <>{chatComponents}</>;
};

ChatLog.propTypes = {
  entries: PropTypes.array,
  local: PropTypes.string,
  onChatEntryToggleLikes: PropTypes.func,
};
export default ChatLog;
