import React, { useState, useEffect } from 'react';
import '../css/settings.css';
import { useHistory } from 'react-router-dom';
// Define the types for theme and language
type Theme = 'light' | 'dark';
type Language = 'Python' | 'Java' | 'C';

const Settings: React.FC = () => {
  // State for theme and language
  const history = useHistory();
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

  const handleHomeRefresh = () => {
    setTimeout(() => {
      history.push("/homepage");
      window.location.reload();
    }, 500);
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
        <div><button className="App-tab-button" onClick={handleHomeRefresh}>Back to Homepage</button></div>
      </div>
    </div>
  );
};

export default Settings;
