import React, { useState } from 'react';
import Dashboard from './dashboard';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Python' | 'Java' | 'C'>('Python');

  const languageResources = {
    Python: [
      { name: 'Python Documentation', link: { type: 'documentation', url: 'https://www.python.org/docs/' } },
      //more Python resources
    ],
    Java: [
      { name: 'Java Documentation', link: { type: 'documentation', url: 'https://docs.oracle.com/javase/' } },
      //more Java resources
    ],
    C: [
      { name: 'C Programming Language', link: { type: 'documentation', url: 'https://en.cppreference.com/w/c/language' } },
      //more C resources
    ],
  };

  const handleLanguageChange = (language: 'Python' | 'Java' | 'C') => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('Python')}>Python</button>
      <button onClick={() => handleLanguageChange('Java')}>Java</button>
      <button onClick={() => handleLanguageChange('C')}>C Programming</button>
      <Dashboard resources={languageResources[selectedLanguage]} />
    </div>
  );
};

export default LanguageSelector;
