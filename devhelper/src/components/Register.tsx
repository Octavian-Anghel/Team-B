import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { firebaseConfig } from "../firebase-config";
import { useHistory } from 'react-router-dom';
import '../Css/Register.css';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

const Register: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const history = useHistory();

    const handleSubmit = async () => {
        if (email && password) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);

                // Send email verification
                await sendEmailVerification(userCredential.user);

                // Save user data to the database
                await addDoc(collection(database, "User Data"), { email, password, uid: userCredential.user.uid });

                setMessage('Registration successful! Please check your email for verification.');
            } catch (error) {
                console.error("Error adding user: ", error);
                setMessage('Registration failed. Please try again.');
            }
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    const handleReturnToLogin = () => {
        // Redirect to login page immediately
        history.push('/');
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

            {/* Button to navigate back to the login page */}
            <button className="App-button" onClick={handleReturnToLogin}>Return to Login</button>
        </div>
    );
};

export default Register;
