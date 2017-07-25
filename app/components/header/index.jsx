import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div id="home-header" className="clearfix home-header">
                <div className="home-header-left pull-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-xia-copy iconfont" ></i>
                </div>
                <div className="home-header-right pull-right">
                    <span className="active">全部</span>
                    <span>本周</span>
                </div>
             
            </div>
        )
    }
}

export default Header