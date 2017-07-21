import React, { Component } from 'react';
import{Link} from 'react-router'
import MainNav from './MainNav/MainNav'
import Home from '../Home/index'
import UserPage from './UserPage/UserPage'
import MovieListPage from './MovieListPage/MovieListPage'
import {connect} from 'react-redux'
import {getDouBanApi} from '../../fetch/home/home.js'
import {addUserInfo} from '../../redux/actions/action.js'
import {addMyMovie} from '../../redux/actions/action.js'
import {getCourse} from '../../redux/actions/action.js'
import { Spin } from 'antd';
import {movieMock} from '../../fetch/home/moviemock.js'
import './MainPage.scss'

class MainPage extends Component {
    constructor (props,context) {
        super(props,context)
        this.state = {
             dataLoading:true
        }
    }
    clickdefault(e){
        //阻止默认
        if(this.state.dataLoading) e.preventDefault()
            
    }

    componentDidMount(){
      getDouBanApi().then(
          (res)=>{
           return res.json()
          }
      ).then(
          (json) =>{
              //初始化数据 => redux
            const user = json.subjects[0].casts[0];
            const movielist = json.subjects;
            const mymovie = json.subjects[0]
            this.props.initData(movielist)
            this.props.addUser(user)
            this.props.addMovie(mymovie)
            this.setState({
                dataLoading:false
            })
          }
      )
    // let json = movieMock;
    //   const user = json.subjects[0].casts[0];
    //         const movielist = json.subjects;
    //         const mymovie = json.subjects[0]
    //         this.props.initData(movielist)
    //         this.props.addUser(user)
    //         this.props.addMovie(mymovie)
    //         this.setState({
    //             dataLoading:false
    //         })

    }
    render() {
        return (
            <div className = "mainpage">
                {   this.state.dataLoading?
                    <Spin size="large" className="spin"></Spin>:
                    this.props.children
                }
                <div className = "navlink">
                    <Link to="/mainpage/homepage" activeClassName = "active" onClick = {(e) => this.clickdefault(e)}> 
                    <i className="iconfont icon-dianyingpiao "></i>
                    <br/> 
                    <span>购票观影</span>
                    </Link>
                    <Link to="/mainpage/movielistpage" onClick = {(e) => this.clickdefault(e)}> 
                    <i className="iconfont icon-tianjia "></i>
                     <br/>
                    <span>发起点映</span>
                    </Link>
                    <Link to="/mainpage/userpage" activeClassName = "active" onClick = {(e) => this.clickdefault(e)}> 
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
        },
        addMovie:(data) => {
             dispatch(addMyMovie(data))
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

