import PropTypes from 'prop-types';

const ColorChoice = ({ user, currentColor, onColorChange }) => {
  return (
    <div className="color-choice">
      <label htmlFor={`color-${user}`}>{user}'s messages: </label>
      <input 
        type="color" 
        id={`color-${user}`}
        value={currentColor}
        onChange={(e) => onColorChange(user, e.target.value)}
      />
    </div>
  );
};

ColorChoice.propTypes = {
  user: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  onColorChange: PropTypes.func.isRequired
};

export default ColorChoice;