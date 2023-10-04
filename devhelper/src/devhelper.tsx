import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        DevHelper
      </header>
      <div className="App-tabs">
        <button className="App-tab-button active" id="tab1-btn">Python</button>
        <button className="App-tab-button" id="tab2-btn">Java</button>
        <button className="App-tab-button" id="tab3-btn">C Programming</button>
      </div>
    </div>
  );
}

export default App;
