import React from 'react';
import { useTheme } from './ThemeContext';

const Toolbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>Current Theme: {theme}</div>
    </div>
  );
};

export default Toolbar;
