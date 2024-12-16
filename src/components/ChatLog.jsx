import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

import './ChatLog.css';

const ChatLog= (props) => {
  const{
    entries
  } = props;

  return (
    <div className='chat-log'>
      {
        entries.length === 0 ? [] : entries.map((entry) => <ChatEntry key={entry.id} {...entry}/>)
      }
    </div>
  );
};

ChatLog.propTypes = {
  // Fill with correct proptypes
  entries: PropTypes.array.isRequired
};

export default ChatLog;
