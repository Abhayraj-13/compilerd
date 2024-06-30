
// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [code, setCode] = useState('');
//   const [language, setLanguage] = useState('python');
//   const [output, setOutput] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/execute/', {
//         language: language,
//         script: code,
//       });

//       if (response.status === 200) {
//         setOutput(response.data.output);
//       } else {
//         setOutput(`Error: ${response.data.errorMessage}`);
//       }
//     } catch (error) {
//       setOutput(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Code Execution Platform</h1>
//       <div>
//         <label htmlFor="languageSelect">Select Language:</label>
//         <select id="languageSelect" value={language} onChange={(e) => setLanguage(e.target.value)}>
//           <option value="python">Python</option>
//           <option value="java">Java</option>
//           <option value="nodejs">Node.js</option>
//           <option value="csharp">C#</option>
//           <option value="cpp">C++</option>
//           <option value="c">C</option>
//           <option value="ruby">Ruby</option>
//           <option value="dart">Dart</option>
//           <option value="react-native">React Native</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="codeInput">Enter Code:</label>
//         <textarea
//           id="codeInput"
//           value={code}
//           onChange={(e) => setCode(e.target.value)}
//           placeholder="Write your code here..."
//           rows="20"
//           cols="80"
//         />
//       </div>
//       <button id="runCodeButton" onClick={handleSubmit}>Run Code</button>
//       <div>
//         <h2>Output:</h2>
//         <pre id="output">{output}</pre>
//       </div>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('nodejs');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/execute/', {
        language: language,
        script: code,
      });

      if (response.status === 200) {
        setOutput(response.data.output);
      } else {
        setOutput(`Error: ${response.data.errorMessage}`);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Code Execution Platform</h1>
        <div className="input-group">
          <label htmlFor="languageSelect">Select Language:</label>
          <select id="languageSelect" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="nodejs">Node.js</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="ruby">Ruby</option>
            <option value="dart">Dart</option>
            <option value="react-native">React Native</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="codeInput">Enter Code:</label>
          <textarea
            id="codeInput"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
            rows="20"
            cols="80"
          />
        </div>
        <button id="runCodeButton" onClick={handleSubmit}>Run Code</button>
        <div className="output-container">
          <h2>Output:</h2>
          <pre id="output">{output}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;

