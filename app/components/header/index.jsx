import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            active:true
        }
    }
    toggle (){
        this.setState({
            active:!this.state.active
        })
    }
    
    render() {
        return (
            <div id="home-header" className="clearfix home-header">
                <div className="home-header-left pull-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-xia-copy iconfont" ></i>
                </div>
                <div className="home-header-right pull-right">
                    <span className={this.state.active?'active':''} onClick={this.toggle.bind(this)}>全部</span>
                    <span className={this.state.active ? '' : 'active'} onClick={this.toggle.bind(this)}>本周</span>
                </div>
             
            </div>
        )
    }
}

export default Header