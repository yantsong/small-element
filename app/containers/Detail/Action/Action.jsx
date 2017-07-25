import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieDesc from '../../../components/MovieDesc/MovieDesc'
import './Action.scss'
class Action extends Component {
    render () {
        return (
            <div className = "movie-action">
                <div className="moviedesc">
                    <MovieDesc data = {this.props.nowInfo}></MovieDesc>
                </div>
                <h3>预估你能召集的人数范围</h3>
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
