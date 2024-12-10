import ChatEntry from './ChatEntry';
import messages from '../data/messages.json';


const ChatLog =(props) => {
  const messageComponents = props.entries.map(message => {
    return (
      <li><ChatEntry id={message.id} sender={message.sender} body={message.body} timeStamp={message.timeStamp}/></li>
    );
  });
  return (
    <ul>
      {messageComponents}
    </ul>
  );
};


export default ChatLog;