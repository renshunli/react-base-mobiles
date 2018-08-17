/**
 * base64格式转换成Blob
 * @param base64Data
 * @return Blob
 */

export default (base64Data) => {
    var format = 'image/jpeg'
    var base64 = base64Data
    var code = window.atob(base64.split(',')[1])
    var aBuffer = new window.ArrayBuffer(code.length)
    var uBuffer = new window.Uint8Array(aBuffer)
    for (var i = 0; i < code.length; i++) {
        uBuffer[i] = code.charCodeAt(i) & 0xff
    }
    // console.info([aBuffer]);
    // console.info(uBuffer);
    // console.info(uBuffer.buffer);
    // console.info(uBuffer.buffer == aBuffer); //true

    var blob = null
    try {
        blob = new Blob([uBuffer], {
            type: format
        })
    } catch (e) {
        window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder
        if (e.name === 'TypeError' && window.BlobBuilder) {
            var bb = new window.BlobBuilder()
            bb.append(uBuffer.buffer)
            blob = bb.getBlob('image/jpeg')
        } else if (e.name === 'InvalidStateError') {
            blob = new Blob([aBuffer], {
                type: format
            })
        } else {
        }
    }
    return blob
}
