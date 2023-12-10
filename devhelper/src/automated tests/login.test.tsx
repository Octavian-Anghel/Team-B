import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

describe('<Login />', () => {
  test('it should render email and password input fields', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
  
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('it should render a login button', () => {
    render(<Login />);
  
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });
});
