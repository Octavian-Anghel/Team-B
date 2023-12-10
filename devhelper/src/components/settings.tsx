import React, { useState, useEffect } from 'react';
import '../css/settings.css';
// Define the types for theme and language
type Theme = 'light' | 'dark';
type Language = 'Python' | 'Java' | 'C';

const Settings: React.FC = () => {
  // State for theme and language
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('Python');

  // Effect to apply the theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Function to handle language selection
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  return (
    <div className="settings-container">
      <h2>User Settings</h2>
      <div className="theme-toggle">
        <label>
          Theme:
          <button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</button>
        </label>
      </div>
      <div className="language-select">
        <label>
          Preferred Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C">C</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Settings;