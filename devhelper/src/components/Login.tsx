import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { database, auth } from '../firebase-config';
import { useHistory, Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isEnterClicked, setIsEnterClicked] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const history = useHistory();  // Use the useHistory hook to get the history object

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
        // Set isEnterClicked to true when the "Enter" button is clicked
        setIsEnterClicked(true);
    };

    const handleRegister = () => {
        // Set isRegisterClicked to true when the "Register" button is clicked
        setIsRegisterClicked(true);
    };

    useEffect(() => {
        // This effect will run when the component mounts
        // and also when isLoggedIn or isEnterClicked or isRegisterClicked changes
        if (isEnterClicked) {
            // Delay the page refresh by 500 milliseconds
            const timeoutId = setTimeout(() => {
                // Redirect to homepage after the delay
                history.push('/homepage');
                // Refresh the page after the redirect
                window.location.reload();
            }, 500);

            // Clean up the timeout to prevent unintended refreshes
            return () => clearTimeout(timeoutId);
        }

        if (isRegisterClicked) {
            // Delay the page refresh by 500 milliseconds
            const timeoutId = setTimeout(() => {
                // Redirect to signup page after the delay
                history.push('/signup');
                // Refresh the page after the redirect
                window.location.reload();
            }, 500);

            // Clean up the timeout to prevent unintended refreshes
            return () => clearTimeout(timeoutId);
        }
    }, [isLoggedIn, isEnterClicked, isRegisterClicked, history]);

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

                {/* Render the "Register" button with the same refresh functionality */}
                <Link to="/signup" onClick={handleRegister}>
                    <button className="register-button">Register</button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
