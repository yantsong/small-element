import React, { Component } from 'react';
import{Link} from 'react-router'
import MainNav from './MainNav/MainNav'
import Home from '../Home/index'
import UserPage from './UserPage/UserPage'
import {connect} from 'react-redux'
import {getDouBanApi} from '../../fetch/home/home.js'
import {addUserInfo} from '../../redux/actions/action.js'
import {getCourse} from '../../redux/actions/action.js'
import './MainPage.scss'

class MainPage extends Component {
    componentDidMount(){
      getDouBanApi().then(
          (res)=>{
           return res.json()
          }
      ).then(
          (json) =>{
            const data = json.subjects[0].casts[0];
           
            this.props.initData(json)
            this.props.addUser(data)
          }
      )
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

// redux 
 const mapDispatchToProps = (dispatch) => {
    return {
        initData: (data) => {
            dispatch(getCourse(data))
        },
        addUser: (data) => {
            dispatch(addUserInfo(data))
        }
    }
}
const mapStateToProps = () => {
    return {
    }
}
const containerName = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

export default containerName;
// export default MainPage;

