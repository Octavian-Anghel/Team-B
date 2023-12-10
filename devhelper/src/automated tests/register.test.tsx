import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../components/Register'; 

describe('Registration Component', () => {
    test('renders the registration form', () => {
        render(<Register />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    });

    test('allows the user to enter their information', () => {
        render(<Register />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

        expect((screen.getByLabelText(/email/i) as HTMLInputElement).value).toBe('test@example.com');
        expect((screen.getByLabelText(/password/i) as HTMLInputElement).value).toBe('password123');
    });
});
