import React, { Component } from 'react'
import './MovieDesc.scss'
import MovieImg from  '../MovieImg/MovieImg'

class MovieDesc extends Component {
    constructor (props, context) {
        super(props, context)
        
    }

    
    render () {
        const imgsrc = this.props.data.images.small
        const num = this.props.data.stars
        const rating = this.props.data.rating.average
        const directors = this.props.data.directors[0]
        const {casts,title} = this.props.data 
        return (
            <div className = "movie-desc">
                <div className="moviedesc-left">
                    <MovieImg imgsrc = {imgsrc}></MovieImg> 
                </div>
                <div className="moviedesc-right">
                    <dl>
                        <dt>{title} <span className = "rating"><i>{rating}</i>分</span></dt>
                        <dd>已点映{num}场</dd>
                    </dl>
                    <ul>
                        <li>导演:{directors.name}</li>
                        <li>主演:{
                            casts.map(
                                (item,index) =>{
                                return <span key = {index}> {item.name} </span>
                                }
                            )
                        }</li>
                        <li>片长:90分钟</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MovieDesc;