import { Switch, Route } from 'react-router-dom'
import { Home, GameInfo } from '../pages'

function Routes() {
  return(
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/gameinfo/:id+' component={GameInfo}/>
    </Switch>
  )
}

export default Routes;