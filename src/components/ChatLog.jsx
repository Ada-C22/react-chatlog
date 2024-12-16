import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

import './ChatLog.css';

const ChatLog= (props) => {
  const{
    entries,
    handleClick
  } = props;

  return (
    <div className='chat-log'>
      {
        entries.length === 0 ? [] : entries.map((entry) => <ChatEntry key={entry.id} {...entry} handleClick={handleClick}/>)
      }
    </div>
  );
};

ChatLog.propTypes = {
  // Fill with correct proptypes
  entries: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ChatLog;
