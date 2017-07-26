import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieDesc from '../../../components/MovieDesc/MovieDesc'
import { Slider, InputNumber, Row, Col } from 'antd'
import { DatePicker } from 'antd'
import moment from 'moment'
import './Action.scss'
class Action extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            inputValue: 40,
            title:'这是活动标题，你可以修改他',
            desc:'这是活动简介，你可以修改他。\\br 明天启七年，北镇抚司锦衣卫沈炼（张震 饰）在一次扫除乱党任务中，为救画师北斋（杨幂 饰），将同僚凌云铠（武强 饰）灭口。裹挟在乱世，沈炼与北斋情陷其中，却越陷越深。而在这一切的背后，巨大阴谋正暗中布局。众生如蝼蚁囿于修罗场，逆鳞之战，一触即发……',
            ifyouare:'这里也可以修改'
        }
    }

    onChange(value){
    this.setState({
      inputValue: value
    })
  }
  
 onChange1(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

 onOk(value) {
  console.log('onOk: ', value);
}


    render () {
        return (
            <div className = "movie-action">
                <div className="moviedesc">
                    <MovieDesc data = {this.props.nowInfo}></MovieDesc>
                </div>
                    <div className = "clearfix action-content">
                         <h3>预估你能召集的人数范围</h3>
                         <div className="clearfix">
                         
                           <Slider min={40} max={500}  
                            step={10}
                            defaultValue = {40}
                            onChange={this.onChange.bind(this)} 
                            value={this.state.inputValue} />

                        <InputNumber
                            min={40}
                            max={500}
                            defaultValue = {40}
                            step={10}
                            style={{ marginLeft: 12 }}
                            value={this.state.inputValue}
                            onChange={this.onChange.bind(this)}
                        />
                         
                         </div>
                        <div>
                            <h3>选择时间</h3>
                            <p className = "message-tip ">建议定在两周后,以便有时间准备</p>
                            <DatePicker 
                            showTime
                            format="YYYY-MM-DD HH:mm"
                            defaultValue={moment('2017-09-01', 'YYYY-MM-DD')}
                            onChange={this.onChange1.bind(this)}
                            onOk={this.onOk}
                            />
                        
                        </div>
                        <ul>
                            <li>
                                <h5>活动标语 <span> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.title}</p>
                            </li>

                            <li>
                                <h5>活动简介 <span> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.desc}</p>
                            </li>

                            <li>
                              <h5>如果你是 <span> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.ifyouare}</p>
                            </li>
                        </ul>
                       
                    </div>                
            </div>
        )
    }
}

const mapDispatchToPorps = (dispatch) =>{
    return {
        }
    }

const mapStateToProps = (state) =>{
    return {
            nowInfo:state.addNowMovie
        }
}

export default connect(mapStateToProps,mapDispatchToPorps)(Action)
