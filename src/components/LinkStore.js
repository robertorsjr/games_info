import React from 'react';
import styled from 'styled-components'
import {mapIconStores} from '../utils/storeIcons'


const LinkHolder = styled.div`
    background-color: #333333;
    border-radius: 10px;
    padding: 20px 10px;
    margin: 0px 45px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 180px;
    cursor: pointer;
`

const StoreTitle = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  color: #8E9093;
  text-align: center;
`
const StoreIcon = styled.div`
  width: 30px;
  height: 30px;
`


function LinkStore({store, url}) {
  return (
      <LinkHolder onClick={()=> window.open(url, "_blank")} >       
        <StoreTitle>{store.name}</StoreTitle>
        <StoreIcon>
          {mapIconStores(store.slug)}
        </StoreIcon>
      </LinkHolder>
  );
}

export default LinkStore;