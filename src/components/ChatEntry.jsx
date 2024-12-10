// update chatEntry and app to display:
// 1. chat message bubble with the message text and relative timestamp,
// 2. plus the sender's name above it.  
// `ChatEntry` props: `sender`, `body`,  and `timeStamp`
// do not need to include the `id` and `liked` fields for Wave 01
// use an instance of the `TimeStamp` component
// The `TimeStamp` component expects one `prop`: `time`


import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, liked}) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
};

export default ChatEntry;
