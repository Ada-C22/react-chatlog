import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((chat,i) => {
    return (
      <li key={i}>
				 <ChatEntry
				   id={chat.id}
				   sender={chat.sender}
				   body={chat.body}
				   timeStamp={chat.timeStamp}
				 />
      </li>
    );
  });

  return (
	  <>
		  {chatComponents}
	  </>
  );
};

export default ChatLog;