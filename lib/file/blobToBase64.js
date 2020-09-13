/**
 * blob转base64
 */
module.exports = (blob_data, callback) => {
    let reader = new FileReader()
    reader.onload = (e) => {
        callback && callback(e.target.result)
    }
    reader.readAsDataURL(blob_data)
}