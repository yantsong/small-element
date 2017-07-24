import React, { Component } from 'react'
import './MovieDesc.scss'
import MovieImg from  '../MovieImg/MovieImg'
class MovieDesc extends Component {
    render () {
        const {imgsrc} = this.props
        const num = parseInt(Math.random()*200+1)
        return (
            <div className = "movie-desc">
                <div className="moviedesc-left">
                    <MovieImg imgsrc = {imgsrc}></MovieImg> 
                </div>
                <div className="moviedesc-right">
                    <dl>
                        <dt>瑶瑶晃晃人间 <span className = "rating"><i>9.5</i>分</span></dt>
                        <dd>这是一句话介绍 <span>已点映{num}场</span> </dd>
                    </dl>
                    <ul>
                        <li>导演:xxx</li>
                        <li>主演:XXX</li>
                        <li>片长:xxx</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MovieDesc