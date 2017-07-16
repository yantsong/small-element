import React, { Component } from 'react';
import MovieImg from '../../components/MovieImg/MovieImg'
import './MovieThumb.scss'

class MovieThumb extends Component {
 constructor(props, context) {
        super(props, context);
}
    render() {
        let date = new Date();
        const arr = ['一','二','三','四','五','六','日']
        const month = date.getMonth()+1;
        const day = date.getDate();
        const week = arr[date.getDay()-1];
        const hour = date.getHours()>9?date.getHours():'0'+ date.getHours();
        const min = date.getMinutes()>10?date.getMinutes():'0'+ date.getMinutes();
        if (!this.props.MovieAction) return(<div></div>);
        const{title,casts,images} = this.props.MovieAction
        const avater = casts[0].avatars.small
        const username =  casts[0].name
        const imgsrc = images.medium
        const num = parseInt(Math.random()*150)

        return (
        <div className = "MovieThumb clearfix">
            <div className="thumbleft pull-left">
                <div className="useraction">
                    <img src={avater} alt=""/><i>{username}</i><span>正在发起</span>
                </div>
                <dl>
                    <dt>《{title}》超前点映中</dt>  
                    <dd><i className = "glyphicon glyphicon-time"></i>{month}月{day}日 &nbsp;星期{week}&nbsp;{hour}:{min}</dd>
                    <dd> <i className="glyphicon glyphicon-map-marker"></i>北京市昌平区回龙观小区</dd>
                </dl>
                {
                    num<100? <div className="nocompelet">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped active" role="progressbar" 
                        aria-valuenow={num} aria-valuemin="0" aria-valuemax="100" style={{'width':num+'%'}}>
                        </div>
                    </div>
                    <div className="count">
                        <span><strong>{num}</strong> 人已报名</span> <i>目标100人</i>
                    </div>
                </div>: <div className="compeleted">
                    <span>活动即将开始</span> <em>售罄</em>
                </div>
                }
              
            </div>
            <div className="thumbright pull-right">
                  <MovieImg imgsrc = {imgsrc}></MovieImg>
            </div>
            <div className="line"></div>
        </div>)
    }

}

export default MovieThumb;