import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import Header from '../../components/header/index'
import Footer from '../../components/Footer'
import MovieThumb from '../../components/MovieThumb/MovieThumb'
import {getHomeData} from './../../fetch/home/home.js'
import Carousel from './../../components/carousel/carousel.jsx'
import WillShow from './willShow/willShow.jsx'
import LoadMore from '../../components/loadMore/loadMore'
import { connect } from 'react-redux'
import {getCourse} from '../../redux/actions/action.js'
import {getDouBanApi} from '../../fetch/home/home.js'
import './home.scss'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
         this.state={
            movieList:[],
            isLoading:false
        }
}
resultHandle(result){
 result.then( res => {
       return res.json()
   }).then( js => {
       let json = js.subjects;
       this.setState({
           movieList: this.state.movieList.concat(json),
           isLoading:false
       }) 
        console.log(json);
       this.props.getDataActions(this.state.movieList)
   })
}
    getData(){
            this.setState({
                isLoading:true
            })
        let result = getDouBanApi();
        this.resultHandle(result);
    }
        componentDidMount(){
            //获取数据
        this.getData();
        //无线下滑开关
        let gdfc
        window.addEventListener('scroll',function(){
            //节流,每次都会清除上一次定时器，直到没有新的动作,计时器才会执行
            clearTimeout(gdfc)
            gdfc = setTimeout( () => {
            let inHt = window.innerHeight;
            //卷起高度
            let sHt = document.body.scrollTop;
            //可用高度
            let cHt = document.body.scrollHeight;

            if( inHt + sHt == cHt){
                this.getData();
            }
        },1000)
        
            //窗口高度
        

        }.bind(this))
        }
     render() {
         const {movieList} = this.state
        return (
            <div className="main">
                <Header cityName = '上海'></Header>
              <Carousel></Carousel>
               <div className="container"><WillShow MovieNow={movieList}></WillShow></div> 
                <MovieThumb MovieAction = {movieList[0]}></MovieThumb>
                {
                    this.state.movieList.length>0?
                     <div className="hot">
                    — 全国热门点映 —
                     </div>:
                     ''
                }
                {
                    this.state.movieList.map(
                        (item,index) =>{
                            console.log(item.id);
                            return <MovieThumb key={item.id} MovieAction={item}></MovieThumb>
                        }
                    )
                }
              <LoadMore loading={this.state.isLoading}></LoadMore>
            </div>
        )
    }
}
//redux-react

function mapStateToProps(state) {
    return {
       
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDataActions: bindActionCreators(getCourse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)