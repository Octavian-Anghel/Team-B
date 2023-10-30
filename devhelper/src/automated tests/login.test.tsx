import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

describe('<Login />', () => {
  test('it should render username and password input fields', () => {
    render(<Login />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
  
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('it should render a login button', () => {
    render(<Login />);
  
    const loginButton = screen.getByText('Login');
    expect(loginButton).toBeInTheDocument();
  });
});
