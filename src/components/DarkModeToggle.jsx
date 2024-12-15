import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      const darkMode = savedDarkMode === 'true';
      setIsDarkMode(darkMode);
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center space-x-2 p-2 text-sm text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 ease-in-out"
    >
      <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      <span>{isDarkMode ? '🌞' : '🌙'}</span>
    </button>
  );
};

export default DarkModeToggle;
