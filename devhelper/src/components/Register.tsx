// Registration.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import the useHistory hook
import axios from 'axios';

const Registration = () => {
  const history = useHistory(); // Initialize the history object using useHistory()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('YOUR_API_REGISTER_ENDPOINT', {
        username,
        password,
      });

      if (response.status === 201) {
        // Registration successful, you may want to save a token or user data
        history.push('/homepage'); // Redirect to the homepage after successful registration
      }
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error here
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Registration;
