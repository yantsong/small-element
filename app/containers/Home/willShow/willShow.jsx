import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './willShow.scss'
import NavTab from '../../../components/navTab/navtab'
import CourseThumb from '../../../components/courseThumb/courseThumb.jsx'

class WillShow extends Component {
   constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            title:'即将展播',
            tips:'更多'
        }
    }
    render() {
        return (
            <div className=" willMovie">
                <ul className="clearfix" style={{width:this.props.MovieNow.length*65+'px'}}>
                    <li className="allMovie">
                        <img src="" alt=""/>
                    </li>
                     {this.props.MovieNow.map( (item,index) => {
                    return   <li key={index} className="">
                    <img src={item.images.small} alt=""/>
                    </li>
                })}
                </ul>
               
            </div>
        );
    }
}

export default WillShow;