import ChatEntry from './ChatEntry';
import './ChatLog.css';


const ChatLog =(props) => {
  const messageComponents = props.entries.map((message, index) => {
    return (
      <li key={index}>
        <ChatEntry id={message.id} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/>
      </li>
    );
  });
  return (
    <ul>
      {messageComponents}
    </ul>
  );
};


export default ChatLog;