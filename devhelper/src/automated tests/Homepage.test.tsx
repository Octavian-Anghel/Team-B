import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Homepage from '../components/homepage'; // Adjust the import path as needed

describe('<Homepage />', () => {
  test('renders the homepage component', () => {
    render(<Homepage />);
    expect(screen.getByText('DevHelper')).toBeInTheDocument();
    expect(screen.getByText('under construction')).toBeInTheDocument();
  });

  test('renders all tab buttons', () => {
    render(<Homepage />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('C Programming')).toBeInTheDocument();
  });
});

