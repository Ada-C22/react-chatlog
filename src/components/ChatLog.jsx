import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({entries, handleLike}) => {
    const getChatLog = (entries) => {
        return entries.map((entry) => {
            return (
                <ChatEntry                                 
                    key={entry.id}
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    handleLike={handleLike}
                />
            )
        })
    };

    return (
        <section>
            
            <ul>{getChatLog(entries)}</ul> */
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })).isRequired,
    handleLike: PropTypes.func,
    
};

export default ChatLog;