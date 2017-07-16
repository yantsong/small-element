import React from 'react';
import { Router,Route,IndexRoute,IndexRedirect} from 'react-router';

import App  from '../containers/index'
import Home from '../containers/Home';
import UserPage from '../containers/MainPage/UserPage/UserPage'
import MainPage from '../containers/MainPage/MainPage'
import Detail from '../containers/Detail';
import NotFound from '../containers/404';


class RouteMap extends React.Component {
    render() {
        const route =  <Route path='/home' component={Home}/>
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                      <IndexRedirect to="/mainpage/homepage" />
                      <Route path='/mainpage' component={MainPage}> 
                            <Route path='/mainpage/homepage' component={Home}/>
                            <Route path='/mainpage/userpage' component={UserPage}/>
                     </Route> 
                    <Route path='/detail' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap