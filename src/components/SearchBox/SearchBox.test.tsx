import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBox from './SearchBox';

describe('<SearchBox />', () => {
  test('should render a search box ', () => {
    render(<SearchBox onSearch={() => null} />);

    const textBox = screen.getByRole('textbox') as HTMLInputElement;
    expect(textBox).toBeInTheDocument();
  });

  test('should call the onSearch function when search is performed', () => {
    const mockFn = jest.fn();

    render(<SearchBox onSearch={mockFn} />);

    const textBox = screen.getByRole('textbox') as HTMLInputElement;
    userEvent.type(textBox, '{enter}');

    expect(mockFn).toBeCalledTimes(1);
  });
});
