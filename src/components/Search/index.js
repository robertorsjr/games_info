import React from 'react';
import { SearchContainer, SearchInput } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search(props) {
  return (
    <SearchContainer>
      <FontAwesomeIcon icon={faSearch} color={'#8E9093'} />
      <SearchInput placeholder={'Search'} {...props} />
    </SearchContainer>
  );
}

export default Search;