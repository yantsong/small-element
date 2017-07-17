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
                    <Link to="/mainpage/homepage" activeClassName = "active"> 
                    <i className="iconfont icon-dianyingpiao "></i>
                    <br/> 
                    <span>购票观影</span>
                    </Link>
                    <Link to="/mainpage/userpage"> 
                    <i className="iconfont icon-tianjia "></i>
                     <br/>
                    <span>发起点映</span>
                    </Link>
                    <Link to="/mainpage/userpage" activeClassName = "active"> 
                     <i className="icon-dianyingren iconfont"></i>
                     <br/>
                    <span>我的</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;

