/**
 * 图片压缩
 * @param file 图片对象
 * @param callback(base64,Blob,file) 图片处理成功后的回调
 */
import base64ToBlob from './convertImgDataToBlob.js'

export default (inFile = {}, callback) => {
    var EXIF = window.EXIF;
    //图片方向角 added by lzk
    var Orientation = null

    //var inputID="file";
    var file = inFile;
    if(!(window.FileReader && window.File && window.FileList && window.Blob)){
        // show.innerHTML = '您的浏览器不支持fileReader';
        // upimg.setAttribute('disabled', 'disabled');
        return false;
    }
    var reader = new FileReader()

    //获取照片方向角属性，用户旋转控制
    EXIF.getData(file, function() {
        // alert(EXIF.pretty(this));
        EXIF.getAllTags(this)
        //alert(EXIF.getTag(this, 'Orientation'));
        Orientation = EXIF.getTag(this, 'Orientation')
        //return;
    })

    reader.onload = function(e) {
        var image = document.createElement('img')
        image.onload = function() {
            var canvas = document.createElement('canvas')
            var x = this.width
            var y = this.height
            this.width = 375 * 2
            this.height = this.width / x * y
            var width = this.width
            var height = this.height

            canvas.width = this.width
            canvas.height = this.height

            var context = canvas.getContext('2d')
            context.clearRect(0, 0, width, height)

            // context.drawImage(this, 0, 0, this.width, this.height);

            switch (Orientation) {
                case 3:
                    context.rotate(180 * Math.PI / 180)
                    context.drawImage(
                        this,
                        -this.width,
                        -this.height,
                        this.width,
                        this.height
                    )
                    break
                case 6:
                    context.rotate(90 * Math.PI / 180)
                    context.drawImage(
                        this,
                        0,
                        -this.width,
                        this.height,
                        this.width
                    )
                    break
                case 8:
                    context.rotate(270 * Math.PI / 180)
                    context.drawImage(
                        this,
                        -this.height,
                        0,
                        this.height,
                        this.width
                    )
                    break
                case 2:
                    context.translate(this.width, 0)
                    context.scale(-1, 1)
                    context.drawImage(this, 0, 0, this.width, this.height)
                    break
                case 4:
                    context.translate(this.width, 0)
                    context.scale(-1, 1)
                    context.rotate(180 * Math.PI / 180)
                    context.drawImage(
                        this,
                        -this.width,
                        -this.height,
                        this.width,
                        this.height
                    )
                    break
                case 5:
                    context.translate(this.width, 0)
                    context.scale(-1, 1)
                    context.rotate(90 * Math.PI / 180)
                    context.drawImage(
                        this,
                        0,
                        -this.width,
                        this.height,
                        this.width
                    )
                    break
                case 7:
                    context.translate(this.width, 0)
                    context.scale(-1, 1)
                    context.rotate(270 * Math.PI / 180)
                    context.drawImage(
                        this,
                        -this.height,
                        0,
                        this.height,
                        this.width
                    )
                    break
                default:
                    context.drawImage(this, 0, 0, this.width, this.height)
            }

            var quality = 0.9 //可以理解为压缩程度
            //quality :图片质量。0 到 1 之间的数字，并且只在格式为 image/jpeg 或 image/webp 时才有效，如果参数值格式不合法，将会被忽略并使用默认值
            var data
            var result
            var length
            //处理图片过大问题
            //控制图片上传的大小，注意若图片过大 ajax上传的时候会出现参数为null的错误
            //这里如果图片过大会将图片压缩程度放大
            do {
                data = canvas.toDataURL('image/jpeg', quality) //压缩图片
                length = data.length
                result = (length / 4 * 3 + 1023) / 1024 //计算压缩后图片的大小（单位：KB）
                quality -= 0.05
            } while (result > 450)
            //data：base64
            let blob = base64ToBlob(data)
            callback(data,blob,file) //回调函数
        }
        image.src = e.target.result
    }
    reader.readAsDataURL(file)
}
