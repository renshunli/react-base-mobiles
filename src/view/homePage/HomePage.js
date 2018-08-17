import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action'

class HomePage extends Component {

    componentDidMount(){
        let dispatch = this.props.dispatch;
        dispatch(actions.getList())
    }

    render() {
        return (
            <div className="homePage">
                <div>首页</div>
                {
                    this.props.list.map((ele,index) => (
                        <div key={ele.text}>{ele.text}</div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.homePage.list
})


export default connect(mapStateToProps)(HomePage);
