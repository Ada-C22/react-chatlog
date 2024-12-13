import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp'

const ChatEntry = ({id,sender,body,timeStamp,liked, chatLikeClicked, uniqueParticipants}) => {
  const onLikeClicked = () => {
    chatLikeClicked(id);
  };
  const getParticipantClass = () => {
    if (sender === uniqueParticipants[0]){
      return 'chat-entry local'
    } else {
      return 'chat-entry remote'
    }
  };

  const participantClass = getParticipantClass();

  const likeButtonText = !liked ? '🤍' : '❤️';

  return (
    <div className={participantClass}>
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
  uniqueParticipants:PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};



export default ChatEntry;
