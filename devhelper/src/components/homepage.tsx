import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MessageComponent } from './Message';
import '../App.css';

function Homepage() {
  const history = useHistory();
  const [entryMessage, setEntryMessage] = useState('');

  const messageComponent = new MessageComponent();

  useEffect(() => {
    setEntryMessage(messageComponent.getMotivationalMessage());
  }, []);

  const handleRefresh = () => {
    setTimeout(() => {
      history.push('/');
      window.location.reload();
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">
        DevHelper
      </header>
      {entryMessage && <div className="App-message">{entryMessage}</div>}
      <div className="App-tabs">
        <button className="App-tab-button" id="tab1">Python</button>
        <button className="App-tab-button" id="tab2">Java</button>
        <button className="App-tab-button" id="tab3">C Programming</button>
      </div>
      <p> under construction</p>
      
      <button className="App-button" onClick={handleRefresh}>Back to Login</button>
    </div>
  );
}

export default Homepage;
