import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './view/homePage/HomePage.js';
import ListPage from './view/listPage/ListPage.js';
import Nav from './component/nav/Nav.js';
import { Button,WingBlank } from 'antd-mobile';



let list = [{text: "首页",url: 'homepage'},{text: "列表页",url: 'listpage'}]

class App extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    textInput(input){
        console.log(input.focus());
    }

    render() {
        return (
            <div className="App">
                <div className="nav-barr">
                    <Nav list={list} customEl={<div>自定义插槽组件</div>}>
                        <div>插槽类似vue - slot</div>
                    </Nav>
                </div>
                <input
                type="text" placeholder="ref自动获取焦点" ref={this.textInput} />
                <Route path="/homepage" component={HomePage}></Route>
                <Route path="/listpage" component={ListPage}></Route>
                <WingBlank>
                    <Button>antd库按钮</Button>
                </WingBlank>
            </div>
        );
    }
}

export default App;