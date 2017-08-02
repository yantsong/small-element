import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieDesc from '../../../components/MovieDesc/MovieDesc'
import { Slider, InputNumber, Row, Col } from 'antd'
import DatePicker from 'react-mobile-datepicker';
import moment from 'moment'
import {addMyMovie} from '../../../redux/actions/action.js'
import './Action.scss'
class Action extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            inputValue: 100,
            title:'这是活动标题，你可以修改他',
            desc: `这是活动简介，你可以修改他,你可以在这里介绍一些活动相关的信息`,
            ifyouare:'这里也是自定义内容区,你可以修改',
            wechat:'购票之后,请加我微信,也可以不加,或者改这里',
            time: new Date(),
            isOpen: false,
            show:false,
            text:'请输入你自定义的内容',
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
         active:item,
     })
    switch (item) {
        case 'title':
            this.setState({
                text:this.state.title
            })
            break;
        case 'desc':
            this.setState({
                text:this.state.desc
            })
            break;
        case 'ifyouare':
            this.setState({
                text:this.state.ifyouare
            })
            break;
        case 'wechat':
            this.setState({
                text:this.state.wechat
            })
            break;
    
        default:
            break;
    }
 }
    changeHtml(onoff){
        let value = this.state.active.toString();
        switch (value) {
            case 'title':
                 this.setState({
                    title : this.text.value,
                    text: this.text.value
                })
                break;
            case 'desc':
                 this.setState({
                    desc : this.text.value,
                    text: this.text.value
                    
                })
                break;
            case 'ifyouare':
                 this.setState({
                    ifyouare : this.text.value,
                    text: this.text.value
                })
                break;
            case 'wechat':
                 this.setState({
                    wechat : this.text.value,
                    text: this.text.value
                })
                break;
            default:
               break;
        }
            console.log(onoff);
            if (!onoff) {
                this.setState({
                show:true
                })
            }else{
                this.setState({
                    show: false
                })
            }
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
        this.state.name && this.state.phone ?
            this.setState(
                {
                    heighLight: true
                }
            ) : this.setState(
                {
                    heighLight: false
                }
            )
    }
    addActionMovie(data){
       this.props.addMovie(data);
       const path = `/mainpage/userpage`
       this.context.router.push(path)
    }



    render () {
        const item = this.state.active.toString()
        console.log(item);
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
                            defaultValue = {100}
                            onChange={this.onChange.bind(this)} 
                            value={this.state.inputValue} />

                        <InputNumber
                            min={40}
                            max={500}
                            defaultValue = {100}
                            step={10}
                            style={{ marginLeft: 12 }}
                            value={this.state.inputValue}
                            onChange={this.onChange.bind(this)}
                        />
                         
                         </div>
                        <div>
                            <h3>选择时间</h3>
                            <p className = "message-tip ">建议定在两周后,以便有时间准备</p>
                            <div className="timePicker" onClick={this.handleClick.bind(this)}>
                            <a
                                className="select-btn"
                               >
                                {moment(this.state.time).format('YYYY-MM-DD HH:mm:ss').toString()}
                                <i></i>
                            </a>
                            <i className="iconfont icon-rili"></i>
                            </div>
                   
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
                            <h5>活动标语 <span onClick={this.editor.bind(this, 'title')}> <i className="iconfont icon-bianji"></i> 个性编辑</span> </h5>
                                <p>{this.state.title}</p>
                            </li>

                            <li>
                            <h5>活动简介 <span onClick={this.editor.bind(this, 'desc')}> <i className="iconfont icon-bianji"></i> 个性编辑</span> </h5>
                                <p>{this.state.desc}</p>
                            </li>

                            <li>
                            <h5>如果你是 <span onClick={this.editor.bind(this, 'ifyouare')}> <i className="iconfont icon-bianji"></i> 个性编辑</span> </h5>
                                <p>{this.state.ifyouare}</p>
                            </li>
                            <li>
                            <h5>如果你是 <span onClick={this.editor.bind(this, 'wechat')}> <i className="iconfont icon-bianji"></i> 个性编辑</span> </h5>
                                <p>{this.state.wechat}</p>
                            </li>

                            <li>
                                <h5>联系方式</h5>
                                <input type="text" placeholder = "请输入姓名(必填)" onKeyDown={this.inputchange.bind(this)}  ref = {(input) =>{this.name = input}}/>
                                <input type="text" placeholder="请输入手机(必填)" onKeyDown={this.inputchange.bind(this)}  ref = {(input) =>{this.phone = input}}/>
                            </li>
                        </ul>
                       
                        <div className="editor" style = {this.state.show?{left:0}:{left:'100%'}}>
                        <textarea ref={(text) => { this.text = text }} value={this.state.text} onChange={this.changeHtml.bind(this,0)}>
                            </textarea>
                            <div className="editor-footer">
                                <a onClick = {this.cancel.bind(this)}>取消</a>
                                <a onClick = {this.changeHtml.bind(this)}>确定</a>
                            </div>
                        </div>
                    </div> 
                    <div className="action-footer">
                        <em>票价 <i>￥40起</i>  </em><a className={this.state.heighLight ? 'active' : ''} onClick={this.addActionMovie.bind(this, this.props.nowInfo)} >确认提交</a>
                    </div>               
            </div>
        )
    }
    componentDidMount() {
       
    }
}

Action.contextTypes = {
    router: React.PropTypes.object
}

const mapDispatchToPorps = (dispatch) =>{
    return {
        addMovie: (data) => {
            dispatch(addMyMovie(data))
        }
        }
    }

const mapStateToProps = (state) =>{
    return {
            nowInfo:state.addNowMovie
        }
}

export default connect(mapStateToProps,mapDispatchToPorps)(Action)
