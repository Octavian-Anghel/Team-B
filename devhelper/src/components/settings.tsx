import React, { useState } from 'react';
import { updateEmail, updatePassword } from 'firebase/auth';
import { auth } from '../firebase-config'; // Assuming you have firebase-config.js exporting auth
import '../Css/settings.css';


enum Theme {
    Light = "light",
    Dark = "dark",
  }

const SettingsComponent: React.FC = () => {
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.Light); // Assuming you have a Theme enum

  const handleUpdateEmail = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateEmail(user, newEmail);
        setMessage('Email updated successfully.');
      } catch (error) {
        console.error('Error updating email:', error);
        setMessage('Failed to update email. Please try again.');
      }
    } else {
      setMessage('User not authenticated. Please log in.');
    }
  };

  const handleUpdatePassword = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updatePassword(user, newPassword);
        setMessage('Password updated successfully.');
      } catch (error) {
        console.error('Error updating password:', error);
        setMessage('Failed to update password. Please try again.');
      }
    } else {
      setMessage('User not authenticated. Please log in.');
    }
  };

  const handleToggleTheme = () => {
    // Toggle between Light and Dark themes
    setCurrentTheme((prevTheme) =>
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light
    );
  };

  return (
    <div className={`account-settings-container ${currentTheme}`}>
      <h2>Account Settings</h2>
      <div>
        <label>
          New Email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
        <button onClick={handleUpdateEmail}>Update Email</button>
      </div>
      <div>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
      <div>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SettingsComponent;
export default Theme;
