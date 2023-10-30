import React, { useState } from 'react';
import { saveUser } from '../interfaces/userstorage';
//const axios = require('axios');
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Assuming you have an API to authenticate the user and get user data
    // Replace this with your actual API call
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response contains user data
        // Replace 'data' with the actual user data property in your API response
        saveUser(data); // Save the user data to local storage
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Handle login error here
      });
  };

  return(
    <div className="center-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
