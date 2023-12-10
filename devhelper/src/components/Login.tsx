import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { database, auth } from '../firebase-config';
import { useHistory } from 'react-router-dom';
import '../Css/login.css';




const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if the user has verified their email
            if (user && !user.emailVerified) {
                setMessage('Login failed: Email not verified');
                return;
            }

            const usersRef = collection(database, "User Data");
            const q = query(usersRef, where("email", "==", user.email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setMessage('Login failed: User not found in database');
            } else {
                setMessage('Login successful');
                setIsLoggedIn(true); // Set isLoggedIn to true after successful login
            }
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
                setMessage('Incorrect username or password');
            } else {
                setMessage(`Login failed: ${errorMessage}`);
            }

            console.error('Login failed:', errorCode, errorMessage);
        }
    };

    const handleEnter = () => {
        setTimeout(() => {
          history.push('/homepage');
          window.location.reload();
        }, 500);
      };

      const handleRegister= () => {
        setTimeout(() => {
          history.push('/');
          window.location.reload();
        }, 500);
      };

    return (
        <div className="center-wrapper">
            <div className="login-container">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
                {message && <p>{message}</p>}

                {/* Render the "Enter" button conditionally */}
                {isLoggedIn && <button className="enter-button" onClick={handleEnter}>Enter</button>}

                {/* Render the "Register" button */}
                <button className="register-button" onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Login;
