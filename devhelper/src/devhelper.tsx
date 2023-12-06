import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './components/Login';
import SignUp from './components/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </Router>
  );
};

export default App;
