import React, { Component } from 'react';
import './MovieImg.scss'

class MovieImg extends Component {
    render() {
        return (
            <div className="movie-img">
                   <p>超前点映</p>
                    <i className="glyphicon glyphicon-play-circle"></i>
                    <img src={this.props.imgsrc} alt=""/>          
            </div>
        );
    }
}

export default MovieImg;