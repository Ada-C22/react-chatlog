import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';


const ChatLog = ({entries}) => {
    const getChatLogJSX = (entries) => {
        return entries.map((entry) => {
            return (
                <ChatEntry 
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                />
            );
        });
    };
    return <div className="chat-log">{getChatLogJSX(entries)}</div> 
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  
  export default ChatLog;