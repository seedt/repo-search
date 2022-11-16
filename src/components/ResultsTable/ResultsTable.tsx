import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from '../../types';

interface ResultsTableProps {
  data: DataType[],
  isLoading: boolean,
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'details',
    key: 'details',
    render: ({ repoName, url }) => <a href={url} target="_blank" rel="noreferrer">{repoName}</a>,
  },
  {
    title: '🌟 Stars',
    dataIndex: 'stars',
    key: 'stars',
    render: (stars: string) => `🌟 ${stars}`,
  },
  {
    title: '🍴 Forks',
    dataIndex: 'forks',
    key: 'forks',
    render: (forks: number) => `🍴 ${forks}`,
  },
];

const ResultsTable: React.FC<ResultsTableProps> = ({ data, isLoading }) => (
  <div data-testid="results-table">
    <Table columns={columns} dataSource={data} pagination={false} rowKey="key" loading={isLoading} />
  </div>
);

export default ResultsTable;
