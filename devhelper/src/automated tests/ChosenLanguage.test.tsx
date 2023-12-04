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
    render(<LanguageSelector />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('C Programming')).toBeInTheDocument();
  });

  test('selects Python and displays Python resources', () => {
    render(<LanguageSelector />);
    fireEvent.click(screen.getByText('Python'));
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('Python Documentation');
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('https://www.python.org/docs/');
  });

  test('selects Java and displays Java resources', () => {
    render(<LanguageSelector />);
    fireEvent.click(screen.getByText('Java'));
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('Java Documentation');
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('https://docs.oracle.com/javase/');
  });

  test('selects C and displays C resources', () => {
    render(<LanguageSelector />);
    fireEvent.click(screen.getByText('C Programming'));
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('C Programming Language');
    expect(screen.getByTestId('mock-dashboard')).toHaveTextContent('https://en.cppreference.com/w/c/language');
  });
});
