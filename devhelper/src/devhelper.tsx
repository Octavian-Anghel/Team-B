import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage';
import LanguageSelector from './components/ChosenLanguage';
import LoginPage from './components/Login';
import SignUp from './components/Register';
import Forum from './components/forum/ForumFrontEnd';
import Settings from './components/settings';

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
