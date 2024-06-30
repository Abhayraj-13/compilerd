// src/LanguageSelect.js
import React from 'react';

function LanguageSelect({ language, setLanguage }) {
  const languages = ['python', 'java', 'nodejs', 'csharp', 'cpp', 'c', 'ruby', 'dart', 'react-native'];

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelect;
