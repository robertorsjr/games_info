import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, GameInfo } from '../pages'

function Routes() {
  return(
    <Switch>
      <Redirect from={'/'} to={'/pages/1'} exact/>
      <Route path="/pages/:page+" component={Home} exact/>
      <Route path='/gameinfo/:id+' component={GameInfo}/>
    </Switch>
  )
}

export default Routes;