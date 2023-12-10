import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/homepage.css";
import { MessageComponent } from "./Message";

const Homepage: React.FC = () => {
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
  const handlePythonRefresh = () => {
    setTimeout(() => {
      history.push("/python");
      window.location.reload();
    }, 500);
  };
  const handleJavaRefresh = () => {
    setTimeout(() => {
      history.push("/java");
      window.location.reload();
    }, 500);
  };
  const handleCRefresh = () => {
    setTimeout(() => {
      history.push("/c");
      window.location.reload();
    }, 500);
  };
  const handleForumRefresh = () => {
    setTimeout(() => {
      history.push("/forum");
      window.location.reload();
    }, 500);
  };
  const handleImposteRefresh = () => {
    setTimeout(() => {
      history.push("/imposter");
      window.location.reload();
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">DevHelper</header>
      {entryMessage && <div className="App-message">{entryMessage}</div>}
      <div className="App-tabs">
        <button className="App-tab-button" onClick={handlePythonRefresh}>
          Python
        </button>
        <button className="App-tab-button" onClick={handleJavaRefresh}>
          Java
        </button>
        <button className="App-tab-button" onClick={handleCRefresh}>
          C
        </button>
        <button className="App-tab-button" onClick={handleImposteRefresh}>
          Imposter Syndrome
        </button>
        <button className="App-tab-button" onClick={handleForumRefresh}>
          Forum
        </button>
      </div>
      <p className="homepage-paragraph">
        {" "}
        Welcome to DevHelper, the go-to platform for programming enthusiasts and
        developers alike! Whether you're interested in Python, Java, or C
        Programming, DevHelper provides a streamlined and intuitive
        experience.licking on any language tab takes you to a dedicated page,
        enriched with resources and documentation specific to that language.
        Moreover, our platform encourages continuous learning and goal setting,
        allowing users to define and track their learning objectives, whether
        short-term or long-term. DevHelper stands out with its focus on
        usability and resource accessibility, making it an invaluable tool for
        both beginners and experienced developers in their coding journey. With
        DevHelper, every user is one click away from a vast repository of
        knowledge and a supportive community, making the journey into the world
        of programming more engaging and efficient.{" "}
      </p>
      <button className="App-button" onClick={handleRefresh}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
