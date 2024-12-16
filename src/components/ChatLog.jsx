import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';


// const ChatLog = (props) => {
const ChatLog = ({entries, onLikeBtnToggle}) =>{
  const chatComponents = entries.map((entry) => {
    return(
      <ChatEntry
        {...entry}
        onLikeToggle={onLikeBtnToggle}
        key={entry.id}
      />
    );
  });


  return (
    <>
      <ul className='chat-log'>
        {chatComponents}
      </ul>
    </>
  );
};



ChatLog.propTypes = {
// Implement
  entries: PropTypes.arrayOf(PropTypes.shape({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  })).isRequired,
  onLikeBtnToggle: PropTypes.func.isRequired,
};

export default ChatLog;