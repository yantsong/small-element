import React from 'react';
import { Router,Route,IndexRoute} from 'react-router';

import App  from '../containers/index'
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import NotFound from '../containers/404';


class RouteMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}
export default RouteMap