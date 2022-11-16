// import React, { ChangeEvent, useState } from 'react';
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox: React.FC<{onSearch: (t: string) => void }> = ({ onSearch }) => (
  <Search
    placeholder="input search text"
    allowClear
    enterButton="Search"
    size="large"
    onSearch={onSearch}
    data-testid="searchbox"
  />
);

export default SearchBox;
