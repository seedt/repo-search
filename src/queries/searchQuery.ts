import { gql } from '@apollo/client';

const searchQuery = gql`
  query Search(
    $searchText: String!
    $pagination: Int
    $before: String
    $after: String
  ) {
    search(
      query: $searchText
      type: REPOSITORY
      last: $pagination
      before: $before
      after: $after
    ) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ... on Repository {
          id
          name
          nameWithOwner
          forkCount
          stargazerCount
          url
        }
      }
    }
  }
`;

export default searchQuery;
