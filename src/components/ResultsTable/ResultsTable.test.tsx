import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultsTable from './ResultsTable';
import { DataType } from '../../types';

const mockData: DataType[] = [
  {
    key: '1', details: { repoName: 'redux', url: '' }, stars: '5', forks: 8,
  },
  {
    key: '2', details: { repoName: 'react', url: '' }, stars: '8', forks: 8,
  },
  {
    key: '3', details: { repoName: 'react-native', url: '' }, stars: '7', forks: 8,
  },
];

describe('<ResultsTable />', () => {
  test('should render a ResultsTableComponent', () => {
    render(<ResultsTable data={[]} isLoading={false} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('should render the correct columns', () => {
    render(<ResultsTable data={[]} isLoading={false} />);
    expect(screen.getByRole('columnheader', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /stars/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /forks/i })).toBeInTheDocument();
  });

  test('should only render header when empty data provided', () => {
    render(<ResultsTable data={[]} isLoading={false} />);

    expect(screen.queryAllByRole('row').length).toBe(2);
  });

  test('should render rows for the given data', () => {
    render(<ResultsTable data={mockData} isLoading={false} />);

    const rows = screen.queryAllByRole('row');
    expect(rows.length).toBe(4);
  });
});
