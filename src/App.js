import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import HomePage from './view/homePage/HomePage.js';
import ListPage from './view/listPage/ListPage.js';
import Nav from './component/nav/Nav.js';
import { Button,WingBlank } from 'antd-mobile';
import './assets/css/reset.css';
import './assets/css/common.css';
import './util/animation.js';
import './app.scss';

let TouchMove = Loadable({
    loader: () => import(/* webpackChunkName: "TouchMove" */'./view/touchMove/TouchMove.js'),
    loading: () => (<div>loading</div>)
})


let list = [{text: "首页",url: 'homepage'},{text: "列表页",url: 'listpage'}]

class App extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <div className="nav-barr">
                    <Nav  list={list} customEl={<div>自定义插槽组件</div>}>
                        <div>插槽类似vue - slot</div>
                    </Nav>
                </div>
                <Route path="/" exact history={this.props.history} component={HomePage}></Route>
                <Route path="/homepage" component={HomePage}></Route>
                <Route path="/listpage" component={ListPage}></Route>
                <Route path="/touchmove" component={TouchMove}></Route>
                <WingBlank>
                    <Button onClick={()=>{this.props.history.push('/haha')}} >antd库按钮</Button>
                </WingBlank>
            </div>
        );
    }
}

export default App;
