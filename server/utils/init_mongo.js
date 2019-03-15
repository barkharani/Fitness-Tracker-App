const mongoose = require('mongoose')

module.exports = () => {
    try {
        mongoose.Promise = require('bluebird')
        mongoose.connect('mongodb://localhost:27017/api')
    } catch (e) {
        const msg = `Failed to connect to mongodb. Reason: \n ${e}`
        console.log(msg)
    }
}