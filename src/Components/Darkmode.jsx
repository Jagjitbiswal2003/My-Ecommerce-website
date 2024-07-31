import React from 'react';
import { useDarkMode } from './DarkModeContext';
import './Darkmode.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCertificate } from "@fortawesome/free-solid-svg-icons"; // Changed icon

const Darkmode = () => {
  const { state, dispatch } = useDarkMode();

  return (
    <div className="modechange">
      <button 
        onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })} 
        aria-label={state.isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <FontAwesomeIcon icon={state.isDarkMode ? faCertificate : faMoon} />
      </button>
    </div>
  );
};

export default Darkmode;
