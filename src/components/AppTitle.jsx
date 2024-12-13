// import { useState } from 'react';
import PropTypes from 'prop-types';

const AppTitle = ({uniqueParticipants}) => {
  return (
    <h1>Chat {uniqueParticipants.length > 0 ? `Between ${uniqueParticipants[0]} and ${uniqueParticipants[1]}` : ``}</h1>
  );
};

AppTitle.propTypes = {
  uniqueParticipants: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired};

export default AppTitle;