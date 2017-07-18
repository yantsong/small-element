import React, { Component } from 'react';
 import {connect} from 'react-redux'
//conc contructor快捷
import './UserPage.scss'
class UserPage extends Component {

    render() {
    const {userInfo} = this.props;
        return (
            <div className = "user-page">
                <h1> <a href="#"><img src={userInfo.avatar}/></a> <span>{userInfo.name}</span> <i>编辑</i>   </h1>
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
