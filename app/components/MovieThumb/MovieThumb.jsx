import React, { Component } from 'react';
import './MovieThumb.scss'

class MovieThumb extends Component {
    render() {
        if (!this.props.MovieAction) return(<div></div>);
        const{title,casts,images} = this.props.MovieAction
        console.log(casts);
        const avater = casts[0].avatars.small
        const username =  casts[0].name
        const imgsrc = images.medium
        return (
        <div className = "MovieThumb clearfix">
            <div className="thumbleft pull-left">
                <div className="useraction">
                    <img src={avater} alt=""/><i>{username}</i><span>正在发起</span>
                </div>
                <dl>
                      <dt>《{this.props.MovieAction.title}》超前点映中</dt>  
                    <dd>这是时间</dd>
                    <dd>这是地点</dd>
                </dl>
            </div>
            <div className="thumbrigth pull-right">
                <img src={imgsrc} alt=""/>
            </div>
        </div>)
    }
}

export default MovieThumb;