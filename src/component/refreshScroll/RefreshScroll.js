import React, { Component } from 'react';
import './refreshScroll.scss';
import Better from 'better-scroll';

class RefreshScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initScroll();
    }

    initScroll() {
        var _this = this;
        var warpper = document.querySelector('.list-wrapper'),
            topTip = document.querySelector('.refresh-hook'),
            bottomTip = document.querySelector('.loading-hook');
        var scroll = new Better(warpper, {
            probeType: 1
        });
        scroll.on('scroll', position => {
            if (position.y > 30) {
                topTip.innerText = '释放立即刷新';
            }
        });
        scroll.on('touchEnd', function(position) {
            if (position.y > 30) {
                _this.props.downRefresh(() => {
                    topTip.innerText = '下拉刷新';
                    scroll.refresh();
                });
            } else if (position.y < this.maxScrollY - 30) {
                if(_this.props.noMore){
                    bottomTip.innerText = '没有更多数据了';
                    return;
                }
                bottomTip.innerText = '加载中...';
                _this.props.reloadData(() => {
                    bottomTip.innerText = '查看更多';
                    scroll.refresh();
                });
            }
        });
    }

    render() {
        return (
            <div className="refreshScroll">
                <div className="list-wrapper">
                    <div>
                        <div className="top-tip">
                            <span className="refresh-hook">下拉刷新</span>
                        </div>
                        <div className="list-content-hook">
                            {this.props.children}
                        </div>
                        <div className="bottom-tip">
                            <span className="loading-hook">查看更多</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RefreshScroll;
