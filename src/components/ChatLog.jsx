import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) =>{
  const chatEntries = props.entries.map((entry)=>{
    return(
        <ChatEntry key={entry.id} sender={entry.sender} timeStamp={entry.timeStamp} body={entry.body}/>
    );
  });

  return(
    <main>
      {chatEntries}
    </main>
  );
};

ChatLog.propTypes ={
	sender: PropTypes.string,
	id: PropTypes.number,
	body: PropTypes.string,
	timeStamp: PropTypes.string,
	liked: PropTypes.bool,
};

export default ChatLog;