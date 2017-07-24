import React from 'react'
import './detail.scss'
import MovieDesc from '../../components/MovieDesc/MovieDesc'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {addNowMovie} from '../../redux/actions/action.js'
import {getDeatilById} from '../../fetch/home/home.js'


class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            dataLoading:false
        }
    }
    componentWillMount() {
        const {id} = this.props.params
        getDeatilById(id).then(
            (res) =>{
                return res.json()
            }
        ).then(
            (json) =>{
                this.props.addDetailInfo(json)
                this.setState(
                    {
                        dataLoading: true
                    }
                )
       
            }
        )
    }
    render() {
        const {title,summary} = this.props.nowInfo
        console.log(title,this.props.nowInfo);
        return (
            <div>
            {
              this.state.dataLoading?
              <div>
               <h1>{title}</h1>
                <h3>影片简介</h3>
                <p className = "desc-title">{summary}</p>
                <MovieDesc data = {this.props.nowInfo}></MovieDesc>
                <div className="desc-footer">
                    <a href="#">更多电影</a>
                    <a href="#">发起点映</a>
                </div>
              </div> : ''
            }
            </div>
        )
    }
}
const mapDispatchToPorps = (dispatch) =>{
    return {
        addDetailInfo : (data) =>{
        dispatch(addNowMovie(data))
        }
    }
}
const mapStateToProps = (state) =>{
    return {
            nowInfo:state.addNowMovie
        }
}

export default connect(mapStateToProps,mapDispatchToPorps)(Detail)
