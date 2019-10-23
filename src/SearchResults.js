import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import api from './api';
import {sleep} from './utils';

const Hotel = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 2em;
  padding: 0.5em 2em;
  border: 2px solid lightblue;
`;

const SearchResults = ({addItem}) => {
  const [results, setResults] = useState();

  useEffect(() => {
    const getResults = async () => {
      const response = await api.getResults();
      await sleep();
      setResults(response);
    };

    getResults();
  }, []);

  if (!results) {
    return 'loading...';
  }

  return results.map(item => (
    <Hotel key={`HOTEL|${item.id}`}>
      <h2>{item.name}</h2>
      <button onClick={() => addItem(item)}>Buy!</button>
    </Hotel>
  ));
};

export default SearchResults;
