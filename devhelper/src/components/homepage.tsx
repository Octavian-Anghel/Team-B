import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Homepage: React.FC = () => {
  const history = useHistory();

  const navigate = (path: string) => {
    history.push(path);
  };

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
      <div className="App-tabs">
        <button className="App-tab-button" onClick={() => navigate('/python')}>Python</button>
        <button className="App-tab-button" onClick={() => navigate('/java')}>Java</button>
        <button className="App-tab-button" onClick={() => navigate('/c-programming')}>C Programming</button>
      </div>
      <p> under construction</p>
      <button className="App-button" onClick={handleRefresh}>Back to Login</button>
    </div>
  );
}

export default Homepage;

