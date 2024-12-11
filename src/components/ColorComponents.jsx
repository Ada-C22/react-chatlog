import './ColorComponents.css';
import PropTypes from 'prop-types';

const ColorComponents = (props) => {
  const getColorClicked = (event) => {
    const colorSelected = event.target.className;
    // some prop function
    props.setColorCallback(colorSelected, props.status);
  };
  return (
    <div className='colorSelectionContainer'>
      <h3 className={props.color}>{props.name}&apos;s color</h3>
      <button className='red' onClick={getColorClicked}>🔴</button>
      <button className='orange' onClick={getColorClicked}>🟠</button>
      <button className='yellow' onClick={getColorClicked}>🟡</button>
      <button className='green' onClick={getColorClicked}> 🟢</button>
      <button className='blue' onClick={getColorClicked}>🔵</button>
      <button className='purple' onClick={getColorClicked}>🟣</button>
    </div>
  );
};
ColorComponents.propTypes = {
  status: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  setColorCallback: PropTypes.func,
};
export default ColorComponents;