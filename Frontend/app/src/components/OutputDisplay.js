// src/OutputDisplay.js
import React from 'react';

function OutputDisplay({ output }) {
  return (
    <div>
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
}

export default OutputDisplay;
