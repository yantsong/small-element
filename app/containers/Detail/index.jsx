import React from 'react'
import './detail.scss'
import MovieDesc from '../../components/MovieDesc/MovieDesc'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {this.props.params.id}
                <h1>瑶瑶晃晃的人间</h1>
                <p className = "desc-title">影片介绍的段落</p>
                <h3>影片简介</h3>
                <MovieDesc></MovieDesc>
                <p>影片详情介绍段落</p>
                <div className="desc-footer">
                    <a href="#">更多电影</a>
                    <a href="#">发起点映</a>
                </div>
            </div>
        )
    }
}
export default Detail;
