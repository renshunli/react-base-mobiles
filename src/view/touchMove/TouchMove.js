import React, { Component } from 'react';
import './touchMove.scss';

class TouchMove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            touches: [{}],
            y1:0,
            y2:0,
            sum:0,
        };
    }

    componentDidMount() {
        var imgEl = document.querySelector('#img');
        var imgWidth = imgEl.offsetWidth;
        var sumStart = 0;
        var windowWidth = document.body.clientWidth;
        imgEl.addEventListener('touchmove', e => {
            e.preventDefault();
            var touches = []
            var eT = e.touches;
            var y1,y2,sum;
            
            for(var i = 0; i < eT.length; i++){
                touches.push(eT[i]);
            }
            if(eT.length > 1){
                y1 = parseInt(eT[0].pageY,10);
                y2 = parseInt(eT[1].pageY,10);
                if(y1 > y2){
                    sum = y1 - y2
                }else{
                    sum = y2 - y1;
                }
                
                if(sumStart === 0){
                    sumStart = sum;
                }else{
                    var size =  sum - sumStart;
                    document.querySelector('#printDiv').innerHTML = `size: ${size}`
                    if(size > 0){
                        document.querySelector('#printDiv').innerHTML = `size :  + ${size} sumStart: ${sumStart} scale : ${size / sumStart} all : ${imgWidth + (imgWidth * (size / sumStart))} imgWidth: ${imgWidth}`
                        var NewImgWidth = parseInt(imgWidth + (imgWidth * (size / sumStart)),10)
                        if(NewImgWidth > windowWidth){
                            imgEl.style.width = NewImgWidth + 'px';
                            imgEl.style.left = - (NewImgWidth - windowWidth) + 'px';
                            imgEl.style.right = - (NewImgWidth - windowWidth) + 'px';
                        }
                        imgEl.style.width = NewImgWidth + 'px';

                    }
                }
            }
            this.setState({
                touches,
                y1,
                y2,
                sum
            })
        });
        imgEl.addEventListener('touchend', e=> {
            sumStart = 0;
            imgEl.style.width = imgWidth + 'px';
        })
    }
    render() {
        return (
            <div className="touch-move">
                {this.state.touches.map((item, index) => (
                    <div key={index}>touches {index} :<br/> pageX-{parseInt(item.pageX,10)} pageY-{parseInt(item.pageY,10)}<br/> y1--{this.state.y1} y2--{this.state.y2} sum --- {this.state.sum}</div>
                ))}
                <div id="printDiv"></div>
                <img
                    id="img"
                    src={require('../../assets/img/bird.png')}
                    alt=""
                />
            </div>
        );
    }
}

export default TouchMove;
