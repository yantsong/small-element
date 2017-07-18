import React, { Component } from 'react';
 import {connect} from 'react-redux'
//conc contructor快捷
import './UserPage.scss'
class UserPage extends Component {

    render() {
    const {userInfo} = this.props;
        return (
            <div className = "user-page">
                <h1> <a href="#"><img src={userInfo.avatar}/></a> <span>{userInfo.name}</span> <i>编辑</i>  </h1>
                <ul>
                    <li>
                        <span>我发起的点映({userInfo.movie.length})</span> <i>></i>
                    </li>
                    <li>
                        <span>我报名的点映(0)</span><i>></i>
                    </li>
                    <li>
                        <span>我的关注</span><i>></i>
                    </li>
                    <li>
                        <span>我收到的留言(0)</span><i>></i>
                    </li>
                    <li>
                        <span>我想点映</span><i>></i>
                    </li>
                </ul>
                <p>
                    <i>?</i>
                    常见问题解答
                </p>
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

export default containerName;
