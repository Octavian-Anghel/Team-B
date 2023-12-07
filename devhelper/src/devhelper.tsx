import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import LoginPage from './components/Login';
import SignUp from './components/Register';
import Forum from  './components/forum/ForumFrontEnd';
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/homepage" component={HomePage} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/forum" component={Forum}/>

      </Switch>
    </Router>
  );
};

export default App;
