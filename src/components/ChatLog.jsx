import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({messagesData, onLikeToggle, owner}) => {
  if (messagesData === undefined) return <></>;

  const feed = messagesData.map( msg => {
    const entries = {
      id : msg.id,
      sender : msg.sender,
      body : msg.body,
      timeStamp : msg.timeStamp,
      liked : msg.liked,
      onLikeToggle : onLikeToggle,
      owner : owner
    };
    return (
      <ChatEntry entries={entries} key={'entry' + msg.id}/>
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