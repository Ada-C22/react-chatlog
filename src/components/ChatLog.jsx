import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({entries, chatClicked}) => {
  const chatComponents = entries.map((chat) => {
    return (
      <li key={chat.id}>
	  <ChatEntry
		  id={chat.id}
		  sender={chat.sender}
		  body={chat.body}
		  timeStamp={chat.timeStamp}
      chatClicked={chatClicked}
      liked={chat.liked}
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
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  })).isRequired,
  chatClicked: PropTypes.func.isRequired,
};

export default ChatLog;