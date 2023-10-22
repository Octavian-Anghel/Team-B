import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const history = useHistory();

  const [name, setName] = useState(''); // New state for the name field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await axios.post('YOUR_API_REGISTER_ENDPOINT', {
        name,  // Send the name field as well to the API
        username,
        password,
      });

      if (response.status === 201) {
        history.push('/homepage');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input  // New input field for the name
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
