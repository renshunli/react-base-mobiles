import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action.js'

class HomePage extends Component {

    componentDidMount(){
        let dispatch = this.props.dispatch;
        dispatch(actions.getList())
    }
    textInput(input){
        if(input){
            input.focus()
        }
    }

    render() {
        return (
            <div className="homePage">
                <div>首页</div>
                <input
                type="text" placeholder="ref自动获取焦点" ref={this.textInput} />
                {
                    this.props.list.map((ele,index) => (
                        <div key={ele.text}>{ele.text}</div>
                    ))
                }
                {this.props.commonState}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.homePage.list,
    commonState: state.commonState.name
})


export default connect(mapStateToProps)(HomePage);
