import React, { Component } from 'react';
import './courseThumb.scss'

class CourseThumb extends Component {
    render() {
        let item = this.props.data
        return (
                <div className="courselist">
                    <div className=" thumbnail">
                        <div className="imgbox ">
                            <img src="http://www.jledu.com/images/upload/course/20170629/1498732312776.png" />
                        </div>
                        <div className="caption ">
                            <div className="clearfix ">
                                <h1 className="pull-left ">{item.courseName}</h1>
                            </div>
                            <div className="info ">
                                <span>{item.id}人购买</span><span>{item.view}浏览</span>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CourseThumb;