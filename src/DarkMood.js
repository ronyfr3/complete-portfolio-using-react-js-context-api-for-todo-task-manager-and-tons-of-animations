import React from 'react';
import useDarkMode from 'use-dark-mode';
import './DarkMood.css'
 
import Toggle from './Toggle';
 
const DarkMood = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <div className='darkmood'>
      <small className='colordaynight'>☀/☾</small>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};
export default DarkMood;