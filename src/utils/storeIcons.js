import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlaystation,
  faXbox,
  faApple,
  faSteam,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export function mapIconStores(slug){
  let icon =''
  
  switch(slug){
    case "playstation-store" :
      icon = faPlaystation;
      break;
    case "xbox360":
    case "xbox-store":
      icon = faXbox;
      break;
    case "steam":
      icon = faSteam
      break;
    case "apple-appstore":
      icon = faApple
      break;
    case "google-play":
      icon = faGooglePlay
      break;
    default:
      icon = faGamepad
      break;

  }

  return <FontAwesomeIcon icon={icon} size={'2x'} color={'white'} />

}