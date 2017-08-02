import React, { Component } from 'react';
import './carousel.scss'
import ReactSwipe from 'react-swipe';

class Carousel extends Component {
    constructor(props,context) {
        super(props,context);
        this.state = {
            index:0
        }
    }
    
    render() {
        const opt = {
            auto:2500,
            callback: (index) =>{
                this.setState(
                    {
                        index:index
                    }
                )
            }
        }
        return (
            <div className="caro">
               <ReactSwipe className="carousel" swipeOptions={opt}>
                <div className="carousel-item"><img src="assets/images/b1.jpg" alt=""/> </div>
                <div className="carousel-item"><img src="assets/images/b2.jpg" alt=""/> </div>
                <div className="carousel-item"><img src="assets/images/b3.jpg" alt=""/> </div>
                <div className="carousel-item"><img src="assets/images/b4.jpg" alt=""/> </div>
            </ReactSwipe>
            <span>
                <i className={this.state.index ===0?"active":''}></i>
                <i className={this.state.index ===1?"active":''}></i>
                <i className={this.state.index ===2?"active":''}></i>
                <i className={this.state.index ===3?"active":''}></i>
            </span>
            </div>
        );
    }
}

export default Carousel;