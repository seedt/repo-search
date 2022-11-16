import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import searchQuery from '../../queries';
import SearchBox from '../SearchBox';
import ResultsTable from '../ResultsTable';
import Pagination from '../Pagination';
import ErrorDisplay from '../ErrorDisplay';
import {
  DataType,
  PageInfo,
  SearchResults,
  SearchVariables,
  SearchNode,
} from '../../types';
import { RESULTS_PER_PAGE } from '../../constants';

const Main: React.FC = () => {
  const [mappedData, setMappedData] = useState<DataType[]>([]);

  const [pageInfo, setPageInfo] = useState<PageInfo>({
    startCursor: null,
    endCursor: null,
    hasPreviousPage: false,
    hasNextPage: false,
  });

  const {
    loading,
    error,
    data,
    refetch,
  } = useQuery<SearchResults, SearchVariables>(searchQuery, {
    variables: {
      searchText: '',
      pagination: RESULTS_PER_PAGE,
      after: null,
      before: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (data && data.search) {
      const { search } = data;
      setMappedData(
        search.nodes.map((item: SearchNode) => ({
          key: item.id,
          details: {
            repoName: item.nameWithOwner,
            url: item.url,
          },
          stars: item.stargazerCount,
          forks: item.forkCount,
        })),
      );

      setPageInfo(search.pageInfo);
    } else {
      setMappedData([]);
    }
  }, [data]);

  if (error) return <ErrorDisplay errorMessage={error.message} />;

  return (
    <div data-testid="main">
      <SearchBox
        onSearch={(text: string) => (
          refetch({ searchText: text, before: null, after: null })
        )}
      />
      <ResultsTable data={mappedData} isLoading={loading} />
      <Pagination
        isLoading={loading}
        hasPrevious={pageInfo.hasPreviousPage}
        hasNext={pageInfo.hasNextPage}
        onNext={() => refetch({ before: null, after: pageInfo.endCursor })}
        onPrevious={() => (
          refetch({ before: pageInfo.startCursor, after: null })
        )}
      />
    </div>
  );
};

export default Main;
