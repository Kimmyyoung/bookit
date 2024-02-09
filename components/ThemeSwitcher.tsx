'use client';
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="block w-fit h-fit">
      <DarkModeSwitch
        style={{  color: `${isDarkMode === false? "white" : "black"}` }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
        />
    </div>
  )
}

export default ThemeSwitcher