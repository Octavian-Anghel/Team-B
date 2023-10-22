import React from 'react';
import '../App.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
          DevHelper
      </header>
      <div className="App-tabs">
        <button className="App-tab-button" id="tab1">Python</button>
        <button className="App-tab-button" id="tab2">Java</button>
        <button className="App-tab-button" id="tab3">C Programming</button>
      </div>
      <p> under construction</p>
    </div>
  );
}

export default Homepage;
