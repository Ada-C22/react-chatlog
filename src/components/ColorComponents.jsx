import './ColorComponents.css';
import PropTypes from 'prop-types';

const ColorComponents = (props) => {
  const colorClicked = () => {
  // pass
  };
  return (
    <div className='colorSelectionContainer'>
      <h3 className={props.color}>{props.name}&apos;s color</h3>
      <button className='red' onClick={colorClicked}>🔴</button>
      <button className='orange'>🟠</button>
      <button className='yellow'>🟡</button>
      <button className='green'>🟢</button>
      <button className='blue'>🔵</button>
      <button className='purple'>🟣</button>
    </div>
  );
};
ColorComponents.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};
export default ColorComponents;