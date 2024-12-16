import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat,i) => {
    return (
      <li key={i}>
	  <ChatEntry
		  id={chat.id}
		  sender={chat.sender}
		  body={chat.body}
		  timeStamp={chat.timeStamp}
		 />
      </li>
    );
  });

  return (
    <>
      {chatComponents}
    </>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,

}))
};

export default ChatLog;