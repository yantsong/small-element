import React from 'react';
import { Router,Route,IndexRoute,IndexRedirect} from 'react-router';

import App  from '../containers/index'
import Home from '../containers/Home';
import UserPage from '../containers/MainPage/UserPage/UserPage'
import MovieListPage from '../containers/MainPage/MovieListPage/MovieListPage'
import MainPage from '../containers/MainPage/MainPage'
import Detail from '../containers/Detail';
import NotFound from '../containers/404';
import Action from '../containers/Detail/Action/Action'


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
                            <Route path='/mainpage/movielistpage' component={MovieListPage}/>
                     </Route> 
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/action' component={Action}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap