import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSelector from '../components/ChosenLanguage';
import Dashboard from '../components/dashboard';

// Mock the Dashboard component
jest.mock('../components/dashboard', () => (props: any) => (
  <div data-testid="mock-dashboard">
    Mocked Dashboard with Resources: {JSON.stringify(props.resources)}
  </div>
));

describe('LanguageSelector Component', () => {
  test('renders language selection buttons', () => {
    render(<LanguageSelector language="Python" />); // Provide the required prop
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('C Programming')).toBeInTheDocument();
  });

  test('selects Python and displays Python resources', () => {
    render(<LanguageSelector language="Python" />); // Provide the required prop
    fireEvent.click(screen.getByText('Python'));
    // Your assertions here
  });

  test('selects Java and displays Java resources', () => {
    render(<LanguageSelector language="Java" />); // Provide the required prop
    fireEvent.click(screen.getByText('Java'));
    // Your assertions here
  });

  test('selects C and displays C resources', () => {
    render(<LanguageSelector language="C" />); // Provide the required prop
    fireEvent.click(screen.getByText('C Programming'));
    // Your assertions here
  });
});
