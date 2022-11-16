import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Main from './components/Main';
import ErrorDisplay from './components/ErrorDisplay';

import { GITHUB_API } from './constants';
import 'antd/dist/antd.css';
import './index.css';

const AUTH_HEADER = 'Bearer';

const init = (
  setError: (error: string) => void,
  setClient: (client: ApolloClient<NormalizedCacheObject>) => void,
  githubToken?: string,
) => {
  if (!githubToken) {
    setError('You must supply a github token at startup using REACT_APP_GITHUB_TOKEN');
    return;
  }

  const httpLink = createHttpLink({
    uri: GITHUB_API,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `${AUTH_HEADER} ${githubToken}`,
    },
  }));

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  setClient(client);
};

const App: React.FC<{githubToken?: string}> = ({ githubToken }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [error, setError] = useState('');

  useEffect(() => {
    init(setError, setClient, githubToken);
  }, []);

  if (error.length) return <ErrorDisplay errorMessage={error} />;

  return client ? (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  )
    : <div>inititialising...</div>;
};

export default App;
