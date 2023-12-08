import React, { useState, useEffect } from 'react';
import Dashboard from './dashboard';

interface LanguageSelectorProps {
  language: 'Python' | 'Java' | 'C';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Python' | 'Java' | 'C'>(language);

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const languageResources = {
    Python: [
      { name: 'Python Documentation', link: { type: 'documentation', url: 'https://www.python.org/docs/' } },
      // more Python resources
    ],
    Java: [
      { name: 'Java Documentation', link: { type: 'documentation', url: 'https://docs.oracle.com/javase/' } },
      // more Java resources
    ],
    C: [
      { name: 'C Programming Language', link: { type: 'documentation', url: 'https://en.cppreference.com/w/c/language' } },
      // more C resources
    ],
  };

  return (
    <div>
      <button onClick={() => setSelectedLanguage('Python')}>Python</button>
      <button onClick={() => setSelectedLanguage('Java')}>Java</button>
      <button onClick={() => setSelectedLanguage('C')}>C Programming</button>
      <Dashboard resources={languageResources[selectedLanguage]} />
    </div>
  );
};

export default LanguageSelector;

