import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.scss';
import UploadImg from '../../component/uploadimg/UploadImg.js'


class ListPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.setState({
            list : [{value: "px 转换为 1:2"},{value:"代码:设计图  24px:48px"}]
        })
    }

    render() {
        return (
            <div className="list-page">
                <div>列表页</div>
                {
                    this.state.list.map((el,index) => (
                        <div key={el.value}>{el.value}</div>
                    ))
                }
                <div>
                    {
                        this.props.list.map((el,index) => (
                            <div key={el.text}>{el.text}</div>
                        ))
                    }
                </div>
                <div className="weui-div">class为weui-开头的 remtopx不转换 宽度300px</div>
                <UploadImg></UploadImg>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.homePage.list
})


export default connect(mapStateToProps)(ListPage);
