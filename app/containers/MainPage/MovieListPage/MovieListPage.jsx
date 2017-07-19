import React, { Component } from 'react'
 import {connect} from 'react-redux'
import MovieImg from '../../../components/MovieImg/MovieImg'
import './MovieListPage.scss'
class MovieListPage extends Component {
    render () {
        const movielist = this.props.movielist;
        console.log(111,movielist);
        return (
            <div className="movie-list-page">
                <div className="search">
                    <input type="text" placeholder = "搜索" />
                    <i>o</i>
                </div>
                <div className="taglist">

                </div>
                <div className="movie-list">
                    <ul>
                     {
                        movielist.map(
                            (item,index) =>{
                                console.log(item);
                                const imgsrc = item.images.medium
                                const title = item.title
                                const {casts} = item
                                return <li>
                                        <div className="list-left">
                                            <MovieImg imgsrc = {imgsrc}></MovieImg>
                                        </div>
                                        <div className="list-right">
                                            <dl>
                                                <dt>{title}</dt>
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