import React, { useState } from 'react';
//import { Redirect } from 'react-router-dom';
import { User } from '../interfaces/user';
import { saveUser, getUser, clearUser } from '../interfaces/userstorage';

const Registration: React.FC = () => {
    const [username, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    //const [redirectToHome, setRedirectToHome] = useState<boolean>(true);

    const handleSubmit = () => {
        if (username && password && email) {
            const newUser: User = {
                username,
                password, 
                email
            };
            saveUser(newUser);
            setMessage('Registration successful!');

        } else {
            setMessage('Please fill out all fields.');
        }
    };

    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <div>
                <label>
                    Username: 
                    <input type="text" value={username} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password: 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Email: 
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <button onClick={handleSubmit}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Registration;
