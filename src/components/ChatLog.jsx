import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const message = props.chatData.map((chat, index) => {
    return (
      <div key={index}>
        <ChatEntry
          sender={chat['sender']}
          body={chat['body']}
          timeStamp={chat['timeStamp']}
        ></ChatEntry>
      </div>
    );
  });

  return (
    <section>
      {message}
    </section>
  );
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ),
};

export default ChatLog;