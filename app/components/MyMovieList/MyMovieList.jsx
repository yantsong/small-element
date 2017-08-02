import React, { Component } from 'react'
import MovieDesc from '../MovieDesc/MovieDesc'
import {connect} from 'react-redux'
import './MyMovieList.scss'

class MyMovieList extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            data:[]
        }
    }
    filterArr(){
        //去除重复
        let newarr = [this.props.movieList.movie[0]];
        let state = false;
        this.props.movieList.movie.forEach(
            (item, index) => {
                state = false;
                newarr.forEach(
                    (item1, index) => {
                        if (item.title == item1.title) {
                            state = true;
                        }
                    }
                )
                if (!state) newarr.push(item)
            }
        )
        this.setState({
            data: newarr
        })
    }
    componentWillMount() {
       this.filterArr();
    }
    render () {
        return (
            <div className = "mymovielist">
            <ul>
                  {
                      this.state.data.map(
                        (item, index) =>{
                            return <li key={index} className= "mymovielistli">
                                <MovieDesc data={item} ></MovieDesc>
                         </li> 
                        })
                  }  
            </ul>              
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        movieList: state.addUserInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyMovieList)