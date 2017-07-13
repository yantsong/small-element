import React, { Component } from 'react';
import './loadMore.scss'
class LoadMore extends Component {
    render() {
        return (
            this.props.loading?
            <div className="container loadmore">
                加载中...
            </div>:null
        );
    }
}

export default LoadMore;