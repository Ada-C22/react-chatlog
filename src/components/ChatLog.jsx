import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const chatentrycomponents = props.entries.map((entries, index) => {
    return (
      <ul key={index}>
        <ChatEntry
          id={entries.id}
          sender={entries.sender}
          body={entries.body}
          timeStamp={entries.timeStamp}
          liked={entries.liked}
          onLiked={props.onLiked}
        ></ChatEntry>
      </ul>
    );
  });

  return (
    <section>
      <ul className="chat-log">
        {chatentrycomponents}
      </ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired,

  onLiked: PropTypes.func.isRequired,
};

export default ChatLog;