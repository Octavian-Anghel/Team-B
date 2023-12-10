import React, { useState, useEffect } from 'react';
import Dashboard from './dashboard';

interface LanguageSelectorProps {
  language: 'Python' | 'Java' | 'C' | 'ImposterSyndrome';
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<'Python' | 'Java' | 'C' | 'ImposterSyndrome'>(language);

  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  const languageResources = {
    Python: [
      { name: 'Python Documentation', link: { type: 'documentation', url: 'https://docs.python.org/3/' } },
      { name: 'Python Tutorials and Exercises', link: { type: 'documentation', url: 'https://www.w3schools.com/python/default.asp' } },
      { name: 'Python Glossary', link: { type: 'documentation', url: 'https://www.codecademy.com/article/glossary-python' } },
    ],
    Java: [
      { name: 'Java Documentation', link: { type: 'documentation', url: 'https://docs.oracle.com/javase/' } },
      { name: 'Java Tutorials and Exercises', link: { type: 'documentation', url: 'https://www.w3schools.com/java/' } },
      { name: 'Java Glossary', link: { type: 'documentation', url: 'https://www.oracle.com/java/technologies/glossary.html' } },
    ],
    C: [
      { name: 'C Programming Language', link: { type: 'documentation', url: 'https://en.cppreference.com/w/c/language' } },
      { name: 'C Programming Tutorials and Exercises', link: { type: 'documentation', url: 'https://www.w3schools.com/c/' } },
      { name: 'C Programming Glossary', link: { type: 'documentation', url: 'https://devdocs.io/c/' } },
    ],
    ImposterSyndrome: [
      { name: 'Imposter Syndrome Resource', link: { type: 'article', url: 'https://mariadroste.org/transition-growth-fulfillment/managing-imposter-syndrome/?gad_source=1&gclid=CjwKCAiAvdCrBhBREiwAX6-6UvJVn8ylM3QIYTuNGqdPSBlUXqE_SuI5q7aC7agiaCpKIzhBXQ8TqRoCjowQAvD_BwE' } },
      { name: 'Imposter Syndrome Ted Talk', link: { type: 'article', url: 'https://www.ted.com/talks/mike_cannon_brookes_how_you_can_use_impostor_syndrome_to_your_benefit?language=en' } },
      { name: 'Imposter Syndrome Ted Talk 2', link: { type: 'article', url: 'https://www.ted.com/talks/elizabeth_cox_what_is_imposter_syndrome_and_how_can_you_combat_it?language=en' } },
    ],
  };

  return (
    <div>
      <button onClick={() => setSelectedLanguage('Python')}>Python</button>
      <button onClick={() => setSelectedLanguage('Java')}>Java</button>
      <button onClick={() => setSelectedLanguage('C')}>C Programming</button>
      <button onClick={() => setSelectedLanguage('ImposterSyndrome')}>Imposter Syndrome Resources</button>
      <Dashboard resources={languageResources[selectedLanguage]} />
    </div>
  );
};

export default LanguageSelector;

