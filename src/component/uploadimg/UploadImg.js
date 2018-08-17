import React, { Component } from 'react';
import { connect } from 'react-redux';
// import imgCompress from '../../util/tools/imgCompress.js'

class UploadImg extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        // imgCompress({file[0]},(base64,blob,imgFile) => {
        //     /* 获取压缩后的图片 base64格式 blob格式 和imgFile */
        //     /* 建议只是用blob格式上传图片 base64文件过大在某些手机上会上传失败 */
        //     this.userImg = base64;
        //     this.$emit('changeImg',{base64,blob,imgFile})
        // })
    }

    render() {
        return (
            <div className="upload-component">
                图片上传组件，待开发
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: state.homePage.list
})


export default connect(mapStateToProps)(UploadImg);



