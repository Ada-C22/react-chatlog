import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, updateLikeStatus }) => {
    return (
        <div className="chat-log">
            {entries.map((entry) => (
                <ChatEntry 
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    updateLikeStatus={updateLikeStatus}
                />
            ))}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    updateLikeStatus: PropTypes.func.isRequired,
};

export default ChatLog;