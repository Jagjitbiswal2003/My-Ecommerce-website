import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Create the context
const DarkModeContext = createContext();

// Reducer function for managing dark mode state
const darkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;  // Return the current state for unrecognized actions
  }
};

// Initial state
const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem('isDarkMode')) || false,  // Load from localStorage or default to light mode
};

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  // Effect to apply class based on dark mode state
  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(state.isDarkMode));
    if (state.isDarkMode) {
      document.body.classList.add('Darkmode');
      document.body.classList.remove('Lightmode');
    } else {
      document.body.classList.add('Lightmode');
      document.body.classList.remove('Darkmode');
    }
  }, [state.isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);
