import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test.skip('should render an error if missing github token env', () => {
    render(<App />);

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

  test('should render the Main component', () => {
    render(<App githubToken="abcd" />);
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
