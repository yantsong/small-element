import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieDesc from '../../../components/MovieDesc/MovieDesc'
import { Slider, InputNumber, Row, Col } from 'antd'
import DatePicker from 'react-mobile-datepicker';
import moment from 'moment'
import './Action.scss'
class Action extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            inputValue: 40,
            title:'这是活动标题，你可以修改他',
            desc:'这是活动简介，你可以修改他。 明天启七年，北镇抚司锦衣卫沈炼（张震 饰）在一次扫除乱党任务中，为救画师北斋（杨幂 饰），将同僚凌云铠（武强 饰）灭口。裹挟在乱世，沈炼与北斋情陷其中，却越陷越深。而在这一切的背后，巨大阴谋正暗中布局。众生如蝼蚁囿于修罗场，逆鳞之战，一触即发……',
            ifyouare:'这里也可以修改',
            time: new Date(),
            isOpen: false,
            show:false,
            text:'测试测试测试',
            active:'',
            heighLight:false,
            name:'',
            phone:''
        }
    }

    onChange(value){
    this.setState({
      inputValue: value
    })
  }
  
  handleClick(){
		this.setState({ isOpen: true });
	}

	handleCancel(){
		this.setState({ isOpen: false });
	}

	handleSelect(time){
		this.setState({ time, isOpen: false });
	}


 editor(item){
     this.setState({
         show:true,
         active:item
     })
 }
    changeHtml(){
        let value = this.state.active.toString();
        console.log(value);
        switch (value) {
            case 'title':
                 this.setState({
                    title : this.text.value
                })
                break;
            case 'desc':
                 this.setState({
                    desc : this.text.value
                })
                break;
            case 'ifyouare':
                 this.setState({
                    ifyouare : this.text.value
                })
                break;
            default:
               break;
        }
        this.setState({
           show:false
        })
    }
    cancel(){
        this.setState({
            show:false
        }
        )
    }
    inputchange(){
        this.setState({
            name:this.name.value,
            phone:this.phone.value
        })
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
                            <a
					className="select-btn"
					onClick={this.handleClick.bind(this)}>
                    {moment(this.state.time).format('LLL').toString()}
                    <i></i>
				</a>
                          <DatePicker
                            value={this.state.time}
                            isOpen={this.state.isOpen}
                            onSelect={this.handleSelect.bind(this)}
                            onCancel={this.handleCancel.bind(this)}
                            theme = 'ios'
                            dateFormat = {['YYYY', 'MM', 'DD', 'hh', 'mm']}
                            />
                        
                        </div>
                        <ul className = "action-list">
                            <li>
                                <h5>活动标语 <span onClick = {this.editor.bind(this,'title')}> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.title}</p>
                            </li>

                            <li>
                                <h5>活动简介 <span onClick = {this.editor.bind(this,'desc')}> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.desc}</p>
                            </li>

                            <li>
                              <h5>如果你是 <span onClick = {this.editor.bind(this,'ifyouare')}> <i></i> 个性编辑</span> </h5>
                                <p>{this.state.ifyouare}</p>
                            </li>

                            <li>
                                <h5>联系方式</h5>
                                <input type="text" placeholder = "请输入姓名(必填)" onChange={this.inputchange.bind(this)}  ref = {(input) =>{this.name = input}}/>
                                <input type="text" placeholder = "请输入手机(必填)" onChange={this.inputchange.bind(this)}  ref = {(input) =>{this.phone = input}}/>
                            </li>
                        </ul>
                        <div className="action-footer">
                            <em>票价 <i>￥40起</i>  </em><a className = {this.state.heighLight?'active':''}>确认提交</a>
                        </div>
                        <div className="editor" style = {this.state.show?{left:0}:{left:'100%'}}>
                            <textarea   ref = {(text) =>{this.text = text}} defaultValue = {this.state.text}>
                            </textarea>
                            <div className="editor-footer">
                                <a onClick = {this.cancel.bind(this)}>取消</a>
                                <a onClick = {this.changeHtml.bind(this)}>确定</a>
                            </div>
                        </div>
                    </div>                
            </div>
        )
    }
    componentDidMount() {
        this.setState(
            {
            heighLight: this.state.name&this.state.phone
            }
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