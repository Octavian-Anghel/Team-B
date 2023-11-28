import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Register from '../components/Register';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

// Mock the necessary Firebase methods
jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');

  return {
    ...originalModule,
    getAuth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve({
      user: {
        email: 'test@example.com',
        // Add any other user properties needed
      }
    })),
    sendEmailVerification: jest.fn(() => Promise.resolve()),
  };
});

describe('Register Component', () => {
  it('should call sendEmailVerification after a successful registration', async () => {
    render(<Register />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // Wait for the async function to complete
    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(sendEmailVerification).toHaveBeenCalledTimes(1);
    });
  });
});
