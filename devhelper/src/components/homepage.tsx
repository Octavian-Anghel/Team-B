import React, { useState, useEffect } from "react";
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import ForumFrontEnd from "./forum/ForumFrontEnd";
import { MessageComponent } from "./Message";
import "../App.css";

function Homepage() {
  const history = useHistory();
  const [entryMessage, setEntryMessage] = useState("");

  useEffect(() => {
    const messageComponent = new MessageComponent();
    setEntryMessage(messageComponent.getMotivationalMessage());
  }, []);

  const handleRefresh = () => {
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 500);
  };

  return (
    <Router>
      <Switch>
        <Route path="/forum">
          <ForumFrontEnd />
        </Route>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">DevHelper</header>
            {entryMessage && <div className="App-message">{entryMessage}</div>}
            <div className="App-tabs">
              <button className="App-tab-button" id="tab1">
                Python
              </button>
              <button className="App-tab-button" id="tab2">
                Java
              </button>
              <button className="App-tab-button" id="tab3">
                C Programming
              </button>
            </div>
            <p> under construction</p>

            <button className="App-button" onClick={handleRefresh}>
              Back to Login
            </button>

            {/* Link to the forum */}
            <Link to="/forum" className="App-button">
              Go to Forum
            </Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default Homepage;
