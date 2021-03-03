import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchContainer = styled.div`
    background-color: #161618;
    width: 328px;
    padding: 17px 20px;
    border-radius: 30px;
`

const SearchInput = styled.input`
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    color: #FFFFFF;
    font-family: 'Noto Sans';
    font-size: 15px;
    margin-left: 10px;
`


function Search(props) {
  return (
      <SearchContainer>
          <FontAwesomeIcon icon={faSearch} color={'#8E9093'} />
          <SearchInput placeholder={'Search'} {...props} />
      </SearchContainer>
  );
}

export default Search;