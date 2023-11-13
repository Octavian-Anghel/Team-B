import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

function Homepage() {
  const history = useHistory();

  const handleRefresh = () => {
    // Delay the page refresh by 500 milliseconds
    setTimeout(() => {
      history.push('/'); // Navigate back to the login page
      window.location.reload();
    }, 500);
  };

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
      
      {/* Button to navigate back to the login page with refresh functionality */}
      <button className="App-button" onClick={handleRefresh}>Back to Login</button>
    </div>
  );
}

export default Homepage;
