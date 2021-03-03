import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWindows,
  faPlaystation,
  faXbox,
  faApple,
  faAndroid,
  faLinux
} from '@fortawesome/free-brands-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export function mapPlatforms(slug) {
  let icon = ''
  
  switch(slug) {
    case 'pc':
      icon = faWindows
      break
    case 'playstation':
      icon = faPlaystation;
      break
    case 'xbox':
      icon = faXbox;
      break
    case 'ios':
    case 'mac':
      icon = faApple
      break
    case 'android':
      icon = faAndroid
      break
    case 'linux':
      icon = faLinux
      break
    default:
      icon = faGamepad
      break
  }

  return <FontAwesomeIcon icon={icon} size={'2x'} color={'white'} />
}