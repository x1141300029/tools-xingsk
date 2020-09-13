/**
 * blob转url
 */
module.exports = (blob_data) => {
    return URL.createObjectURL(blob_data)
}