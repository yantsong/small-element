import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieDesc from '../../../components/MovieDesc/MovieDesc'
import { Slider, InputNumber, Row, Col } from 'antd'
import { DatePicker } from 'antd';
import './Action.scss'
class Action extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            inputValue: 1,
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
                <h3>预估你能召集的人数范围</h3>
                 <Row>
                    <Col span={12}>
                        <Slider min={1} max={20} onChange={this.onChange.bind(this)} value={this.state.inputValue} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={this.state.inputValue}
                            onChange={this.onChange.bind(this)}
                        />
                    </Col>
                 </Row>
                <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Select Time"
                onChange={this.onChange1.bind(this)}
                onOk={this.onOk}
                />
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
