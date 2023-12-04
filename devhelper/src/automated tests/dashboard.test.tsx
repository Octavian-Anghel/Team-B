import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../components/dashboard'; // Adjust the import path as necessary

describe('Dashboard Component', () => {
  // Mock resources
  const mockResources = [
    { name: 'Resource 1', link: { type: 'type1', url: 'http://url1.com' } },
    { name: 'Resource 2', link: { type: 'type2', url: 'http://url2.com' } },
  ];

  test('renders resources correctly', () => {
    render(<Dashboard resources={mockResources} />);
    expect(screen.getByText('Resource 1')).toBeInTheDocument();
    expect(screen.getByText('Resource 2')).toBeInTheDocument();
  });

  test('allows user to input a goal', () => {
    render(<Dashboard resources={mockResources} />);
    const input = screen.getByPlaceholderText('Type your goal here') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'New Goal' } });
    expect(input.value).toBe('New Goal');
  });

  test('allows user to select a goal type', () => {
    render(<Dashboard resources={mockResources} />);
    const shortTermCheckbox = screen.getByLabelText('Short-term');
    fireEvent.click(shortTermCheckbox);
    expect(shortTermCheckbox).toBeChecked();
  });

  test('submits the form and displays the current goal', () => {
    render(<Dashboard resources={mockResources} />);
    const input = screen.getByPlaceholderText('Type your goal here');
    fireEvent.change(input, { target: { value: 'New Goal' } });
    const submitButton = screen.getByText('Set Goal');
    fireEvent.click(submitButton);
    expect(screen.getByText('Your Current Goal:')).toBeInTheDocument();
    expect(screen.getByText('New Goal (long-term)')).toBeInTheDocument();
  });
});
