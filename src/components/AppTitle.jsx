// import { useState } from 'react';
import PropTypes from 'prop-types';

const AppTitle = ({chatsData}) => {
  const uniqueParticipants = [...new Set(chatsData.map((chat)=>chat.sender))];
  console.log(`test`,uniqueParticipants);
  return (
    <h1>Chat {uniqueParticipants.length > 0 ? `Between ${uniqueParticipants[0]} and ${uniqueParticipants[1]}` : ``}</h1>
  );
};

AppTitle.propTypes = {
  chatsData: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      sender:PropTypes.string.isRequired,
      body:PropTypes.string.isRequired,
      timeStamp:PropTypes.string.isRequired,
      liked:PropTypes.bool.isRequired,
    })
  ).isRequired
};

export default AppTitle