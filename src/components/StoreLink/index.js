import React from 'react';
import { LinkHolder, StoreIcon, StoreTitle } from './styles'
import {mapIconStores} from '../../utils/storeIcons'

function StoreLink({store, url}) {
  return (
    <LinkHolder onClick={()=> window.open(url, "_blank")} >       
      <StoreTitle>{store.name}</StoreTitle>
      <StoreIcon>
        {mapIconStores(store.slug)}
      </StoreIcon>
    </LinkHolder>
  );
}

export default StoreLink;