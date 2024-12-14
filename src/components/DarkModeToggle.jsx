import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved dark mode preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');

    // If savedDarkMode is null, check the system preference (use matchMedia)
    if (savedDarkMode !== null) {
      const darkMode = savedDarkMode === 'true';
      setIsDarkMode(darkMode);

      // Apply the dark class on the <html> element if dark mode is enabled
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // If no saved mode, check the system preference (via matchMedia)
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []); // Run this only once on component mount

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Toggle the 'dark' class on the <html> element
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Save the user's preference in localStorage
      localStorage.setItem('darkMode', newMode);

      return newMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-1 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
