import React from 'react';

interface DataType {
  key: React.Key;
  details: {
    repoName: string,
    url: string,
  };
  stars: string;
  forks: number;
}

interface PageInfo {
  startCursor?: string | null;
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface SearchNode {
  id: string;
  nameWithOwner: string;
  forkCount: number;
  stargazerCount: string;
  url: string;
}

interface SearchResults {
  search: {
    pageInfo: PageInfo;
    nodes: SearchNode[];
  };
}

interface SearchVariables {
  searchText: string;
  pagination: number;
  after?: string | null;
  before?: string | null;
}

export type {
  DataType,
  PageInfo,
  SearchNode,
  SearchResults,
  SearchVariables,
};
