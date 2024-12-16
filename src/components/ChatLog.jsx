import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({messagesData, onLikeToggle, owner}) => {
  const feed = messagesData.map( msg => {
    return (
      <ChatEntry
        message={msg}
        key={msg.id}
        onLikeToggle={onLikeToggle}
        owner={owner}/>
    );
  });

  return (
    <div className='chat-log'>
      {feed}
    </div>
  );
};

ChatLog.propTypes = {
  messagesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired
};

export default ChatLog;