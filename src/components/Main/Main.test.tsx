import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Main from './Main';

describe('<Main />', () => {
  test('should render the main components', () => {
    render(
      <MockedProvider>
        <Main />
      </MockedProvider>,
    );

    expect(screen.getByTestId('searchbox')).toBeInTheDocument();
    expect(screen.getByTestId('results-table')).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
