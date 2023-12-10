import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Settings from '../components/settings'; // Adjust the import path as needed

describe('Settings Component', () => {
  it('renders without crashing', () => {
    render(<Settings />);
    expect(screen.getByText('User Settings')).toBeInTheDocument();
  });

  it('toggles theme on button click', () => {
    render(<Settings />);
    const toggleButton = screen.getByText('Theme:');
    fireEvent.click(toggleButton);
    const expectedText = 'Theme:' + (document.body.className === 'light' ? 'Dark' : 'Light');
    expect(toggleButton.textContent).toBe(expectedText);
  });

  it('changes language on selection', () => {
    render(<Settings />);
    const select = screen.getByLabelText('Preferred Language:');
    fireEvent.change(select, { target: { value: 'Java' } });
  });
});
