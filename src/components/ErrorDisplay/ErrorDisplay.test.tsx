import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorDisplay from './ErrorDisplay';

describe('<ErrorDisplay />', () => {
  test('should display the given error message', () => {
    const mockErrorMessage = 'There was an error';

    render(<ErrorDisplay errorMessage={mockErrorMessage} />);

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
    expect(screen.getByText(mockErrorMessage)).toBeInTheDocument();
  });
});
