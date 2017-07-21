import React, { Component } from 'react'
 import {connect} from 'react-redux'
import MovieImg from '../../../components/MovieImg/MovieImg'
import './MovieListPage.scss'
class MovieListPage extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            movielist:this.props.movielist,
            filterlist:this.props.movielist,
            genres:[],
            index:0,
        
            }
    }
    componentWillMount(){
       let arr = this.genresArr()
       //并不会立即更新,现在加入了队列
       this.setState({
          genres: arr 
       }
       )
    }
    render () {
        const movielist = this.state.movielist;
        const {genres} = this.state 
        
        return (
            <div className="movie-list-page">
                <div className="search">
                    <input type="text" placeholder = "输入片名\导演\演员..." onChange = {this.inputFilter.bind(this)} ref={(input) =>{this.input=input}}/>
                    <i>o</i>
                </div>
                <div className="tag-list">
                    <ul className = "clearfix">
                        <li className={this.state.index === 0?'active':''} onClick={this.clickHandle.bind(this,0)}>全部</li>
                        {
                            genres.map(
                                (item,index1) =>{
                                    return <li key = {index1} className={this.state.index==index1+1?'active':''} onClick={this.clickHandle.bind(this,index1+1,item)}>{item}</li>
                                }
                            )
                        }
                    </ul>
                </div>
                <div className="movie-list">
                    <ul>
                     {
                        movielist.map(
                            (item,index) =>{
                                const imgsrc = item.images.medium
                                const title = item.title
                                const {casts} = item
                                const {average} = item.rating
                                return <li key={index}>
                                        <div className="list-left">
                                            <MovieImg imgsrc = {imgsrc}></MovieImg>
                                        </div>
                                        <div className="list-right">
                                            <dl>
                                                <dt className="clearfix"><h2>{title}</h2> <span><em>{average}</em>分</span></dt>
                                                <dd>
                                                    <span>主演:</span>
                                                    {
                                                        casts.map(
                                                            (item,index) => {
                                                                return <span key={index}>{item.name}</span>
                                                            }
                                                        )
                                                    }
                                                </dd>
                                            </dl>
                                            <p> <span>导演:{item.directors[0].name}</span> <em>发起点映</em> </p>
                                        </div>
                                   </li>
                            }
                        )
                     }
                    </ul>
                    
                </div>
            </div>
        )
    }
    componentDidMount() {
    }
      //数组筛选函数
    genresArr(){ 
        let arr = [];
        //遍历
        this.props.movielist.forEach(
          (item,index)=>{
            item.genres.forEach(
                (item,index)=>{
                    arr.push(item)
                }
            )
          }
      )
        //set去重
        let set = new Set(arr);
        let arr1 = [];
        //转为数组
        set.forEach(
            (item) => {
                arr1.push(item)
            }
        )
        return arr1;
    }
    clickHandle(index,item){
        if(!index) {
            this.setState(
                {
                    index:0,
                    filterlist:this.props.movielist,
                    movielist:this.props.movielist
                }
            )
        return;
        }
            
        let filterarr;
        filterarr = this.filtertag(this.props.movielist,item)
        console.log(filterarr);
        //设置state
            this.setState({
                index:index,
                filterlist:filterarr,
                movielist:filterarr
                })
            console.log(this.state.movielist);
            }
        //输入搜索
    inputFilter(){
        let value,filterarr,resultArr = [];
        value = this.input.value.toString();
        console.log(111,value);
        filterarr = this.state.filterlist
        console.log(filterarr);
        filterarr.forEach(
            (item,index) =>{
               console.log('object');
            let strArr = [item.title];
                item.casts.forEach(
                    (item) =>{
                    strArr.push(item.name)
                    }
                )
                strArr.push(item.directors[0].name)
                console.log(strArr.toString().indexOf('刀'),'1cixunhuan');
                if (strArr.toString().indexOf(value) != -1) { console.log(strArr);resultArr.push(item)}
            }
        )
        this.setState((prevstate) =>{
         return {
            movielist:resultArr
        }   
        })
            
        }
     filtertag(data,key){
         if (!key)  return data;
        return data.filter(
            (item1,index1) => {
                return item1.genres.indexOf(key) != -1
            }
        )
     }       
}

const mapStateToProps = (state) =>{
    return {
        movielist: state.getMoreData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieListPage)