import React, { Component } from 'react';
import{Link} from 'react-router'
import MainNav from './MainNav/MainNav'
import Home from '../Home/index'
import UserPage from './UserPage/UserPage'

class MainPage extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                {this.props.children}
       <h1>
           <Link to="/mainpage/homepage">111</Link>
           <Link to="/mainpage/userpage">222</Link>
       </h1>
            </div>
        );
    }
}

export default MainPage;