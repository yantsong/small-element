import React, { Component } from 'react';
import{Link} from 'react-router'
import MainNav from './MainNav/MainNav'
import Home from '../Home/index'
import UserPage from './UserPage/UserPage'
import './MainPage.scss'

class MainPage extends Component {
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                {this.props.children}
                <div className = "navlink">
                    <Link to="/mainpage/homepage"> <span>购票观影</span> <i></i></Link>
                    <Link to="/mainpage/userpage"> <span>发起点映</span> <i></i></Link>
                    <Link to="/mainpage/userpage"> <span>我的</span> <i></i></Link>
                </div>
            </div>
        );
    }
}

export default MainPage;