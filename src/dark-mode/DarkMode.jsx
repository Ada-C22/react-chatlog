import './DarkMode.css';
import PropTypes from 'prop-types';

const DarkMode = ({ currentTheme, toggleTheme }) => {
  let mode = currentTheme === 'App' ? 'AppDark' : 'App';

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
      />
      <label className='dark_mode_label'
        htmlFor='darkmode-toggle'
        onClick={()=>{
          toggleTheme(mode);
        }}>
      </label>
    </div>
  );
};

DarkMode.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired
};

export default DarkMode;
