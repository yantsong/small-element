import React, { Component } from 'react';
 import {connect} from 'react-redux'
 import QA from '../../../components/QA/QA.jsx'
//conc contructor快捷
import './UserPage.scss'
class UserPage extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            arr:[]
        }
    }
    
    userDetail(){
        this.context.router.push('/mymovielist')
    }
    filterArr() {
        //去除重复
        let newarr = [this.props.userInfo.movie[0]];
        let state = false;
        this.props.userInfo.movie.forEach(
            (item, index) => {
                state = false;
                newarr.forEach(
                    (item1, index) => {
                        if (item.title == item1.title) {
                            state = true;
                        }
                    }
                )
                if (!state) newarr.push(item)
            }
        )
        this.setState({
            arr: newarr
        })
    }
    componentWillMount() {
        this.filterArr()
    }
    render() {
    const {userInfo} = this.props;
        return (
            <div className = "user-page">
                <h1> <a href="#"><img src={userInfo.avatar}/></a> <span>{userInfo.name}</span> <i className = "iconfont icon-bianji"></i>  </h1>
                <ul>
                    <li onClick={this.userDetail.bind(this)}>
                        <span>我发起的点映({this.state.arr.length})</span> <i className="iconfont icon-houdongfangiconfont24"></i>
                    </li>
                    <li>
                        <span>我报名的点映(0)</span><i className="iconfont icon-houdongfangiconfont24"></i>
                    </li>
                    <li>
                        <span>我的关注</span><i className="iconfont icon-houdongfangiconfont24"></i>
                    </li>
                    <li>
                        <span>我收到的留言(0)</span><i className="iconfont icon-houdongfangiconfont24"></i>
                    </li>
                    <li>
                        <span>我想点映</span><i className="iconfont icon-houdongfangiconfont24"></i>
                    </li>
                </ul>
                <QA></QA>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo:state.addUserInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
const containerName = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);

UserPage.contextTypes = {
    router: React.PropTypes.object
}

export default containerName;
