import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({id,sender,body,timeStamp,liked, chatLikeClicked}) => {
  const onLikeClicked = () => {
    chatLikeClicked(id);
  };

  const likeButtonText = !liked ? '🤍' : '❤️';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time= {timeStamp}></TimeStamp></p>
        <button className="like"onClick={onLikeClicked}>{likeButtonText}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender:PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp:PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  chatLikeClicked:PropTypes.func.isRequired,
};



export default ChatEntry;
