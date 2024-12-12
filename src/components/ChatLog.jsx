import ChatEntry from "./ChatEntry";
import PropTypes from "prop-types";

const ChatLog = ({ chatData, onLike }) => {
  const message = chatData.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat["body"]}
        timeStamp={chat["timeStamp"]}
        liked={chat["liked"]}
        onLike={onLike}
      ></ChatEntry>
    );
  });

  return <section>{message}</section>;
};

ChatLog.propTypes = {
  chatData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;
