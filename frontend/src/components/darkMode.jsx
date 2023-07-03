import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';

export function DarkMode() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode === 'true');

  const DarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      className='border rounded-lg p-2 dark:border-white border-black'
      onClick={DarkModeToggle}
    >
      {isDarkMode ? <RiMoonLine color="white" size={24} /> : <RiSunLine color="black" size={24} />}
    </button>
  );
}