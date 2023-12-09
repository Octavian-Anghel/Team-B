import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../components/homepage';

describe('<Homepage />', () => {
  test('renders the homepage component', () => {
    render(<Homepage />);
    expect(screen.getByText('DevHelper')).toBeInTheDocument();
  });

  test('renders all tab buttons', () => {
    render(<Homepage />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('Forum')).toBeInTheDocument();
  });

  test('renders back to login button', () => {
    render(<Homepage />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
