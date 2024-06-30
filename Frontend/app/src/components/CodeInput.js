// src/CodeInput.js
import React from 'react';

function CodeInput({ code, setCode }) {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Write your code here..."
      rows="20"
      cols="80"
    />
  );
}

export default CodeInput;
