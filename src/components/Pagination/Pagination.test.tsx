import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from './Pagination';

describe('<Pagination />', () => {
  test('should render previous and next buttons', () => {
    render(
      <Pagination
        isLoading={false}
        hasNext={false}
        hasPrevious={false}
        onNext={jest.fn()}
        onPrevious={jest.fn()}
      />,
    );

    expect(screen.getByTestId('btn-previous')).toBeInTheDocument();
    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
  });

  test('should render disabled buttons if specified', () => {
    const mockPrev = jest.fn();
    const mockNext = jest.fn();

    render(
      <Pagination
        isLoading={false}
        hasNext={false}
        hasPrevious={false}
        onPrevious={jest.fn()}
        onNext={jest.fn()}
      />,
    );

    const btnPrevious = screen.getByTestId('btn-previous');
    expect(btnPrevious).toHaveProperty('disabled');
    userEvent.click(btnPrevious);
    expect(mockPrev).toBeCalledTimes(0);

    const btnNext = screen.getByTestId('btn-next');
    expect(btnNext).toHaveProperty('disabled');
    userEvent.click(btnNext);
    expect(mockNext).toBeCalledTimes(0);
  });

  test('should call correct callbacks on button click', () => {
    const mockPrev = jest.fn();
    const mockNext = jest.fn();

    render(
      <Pagination
        isLoading={false}
        hasNext
        hasPrevious
        onPrevious={mockPrev}
        onNext={mockNext}
      />,
    );

    expect(mockPrev).toBeCalledTimes(0);
    const btnPrevious = screen.getByTestId('btn-previous');
    userEvent.click(btnPrevious);
    expect(mockPrev).toBeCalledTimes(1);

    expect(mockNext).toBeCalledTimes(0);
    const btnNext = screen.getByTestId('btn-next');
    userEvent.click(btnNext);
    expect(mockNext).toBeCalledTimes(1);
  });
});
