import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from "../firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await addDoc(collection(database, "User Data"), { email, password });
                setMessage('Registration successful!');
            } catch (error) {
                console.error("Error adding user: ", error);
                setMessage('Registration failed. Please try again.');
            }
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    return (
        <div className="registration-container">
            <h2>Registration</h2>
            <div>
                <label>
                    Email: 
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password: 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
            </div>
            <button onClick={handleSubmit}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
