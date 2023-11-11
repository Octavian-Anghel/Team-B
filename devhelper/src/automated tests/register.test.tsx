import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Registration from '../components/Register'; 

describe('Registration Component', () => {
    test('renders the registration form', () => {
        render(<Registration />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
    });

    test('allows the user to enter their information', () => {
        render(<Registration />);
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });

        expect((screen.getByLabelText(/username/i) as HTMLInputElement).value).toBe('testuser');
        expect((screen.getByLabelText(/password/i) as HTMLInputElement).value).toBe('password123');
        expect((screen.getByLabelText(/email/i) as HTMLInputElement).value).toBe('test@example.com');
    });
});
