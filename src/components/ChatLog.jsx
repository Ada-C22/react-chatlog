import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
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
          local={props.local}
          localColor={props.localColor}
          remoteColor={props.remoteColor}
        ></ChatEntry>
      </div>
    );
  });
  return <>{chatComponents}</>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body:PropTypes.string,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })),
  local: PropTypes.string,
  onChatEntryToggleLikes: PropTypes.func,
  localColor: PropTypes.string,
  remoteColor:PropTypes.string,
};
export default ChatLog;
