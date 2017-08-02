import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './willShow.scss'

class WillShow extends Component {
   constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index:0
        }
    }
    clickHandle(index){
         this.setState({
                        index:index+1
                    })
        this.props.changeActive(index)
    }
    render() {
        const wt = 67;
        const mg = 5;
        const ulwt = (this.props.MovieNow.length+1)*(wt+mg*2)+10
        return (
            <div className=" willMovie">
                <ul className="clearfix" style={{width:ulwt+'px'}}>
                    <li className={this.state.index === 0?'active':''} onClick = {() => this.setState(
                        {index:0})}>
                        <p>全部点映</p>
                        <img src="assets/images/s1.jpg" alt=""/>
                    </li>
                     {this.props.MovieNow.map( (item,index) => {
                    return   <li key={index} className={this.state.index === index+1?'active':''} onClick={
                        this.clickHandle.bind(this, index)
                }>
                    <img src={item.images.small} alt=""/>
                    </li>
                })}
                </ul>
               
            </div>
        );
    }
}

export default WillShow;