import React, { Component } from 'react';
import './navTab.scss'
class NavTab extends Component {
    
    render() {
        return (
            <div className="navtab clearfix">
                <h1 className="pull-left">{this.props.title}</h1>
                 <a>{this.props.tips}</a>
            </div>
        );
    }
}

export default NavTab;