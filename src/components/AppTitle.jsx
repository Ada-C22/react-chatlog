// import { useState } from 'react';
import PropTypes from 'prop-types';

const AppTitle = ({chatsData}) => {
  const uniqueParticipants = [...new Set(chatsData.map((chat)=>chat.sender))];
  return (
    <h1>Chat Between {uniqueParticipants[0]} and {uniqueParticipants[1]}</h1>
  );
};
// const findAppParticipants = () => {
//     chatParticipants = []
//     setChatParticipants((chatJson)=>chatJson.map(chatEntry) => {
//       let sender = chatEntry.sender; 
//       if (!chatParticipants.includes(sender)) {
//         setChatParticipants([...chatParticipants,sender])
//       };
//     });
//     return (chatParticipants) 
//   };


//   const generatAppTitle = () => {
//     const appParticipants = findAppParticipants()
//     setAppTitle((appTitle) => appParticipants.map(appTitle) => {
//       const newLine = ' and ' + participant;
//       setAppTitle([...appTitle,newLine];
//       )
//     return (appTitle); 
//     })

//   findChatParticipants()

// }
// }

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