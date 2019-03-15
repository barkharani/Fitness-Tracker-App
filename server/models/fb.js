const mongoose = require('mongoose')
const randtoken = require('rand-token')

Schema = mongoose.Schema({
    id: {
        type: String
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    token: {
        type: String,
        default: randtoken.generate(32)
    },
    phone: {
        type: String,
    },
    info: {
        type: String,
    },
    sex: {
        type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    photo: {
        type: String,
    },
    weight: {
        type: String
    },
    height: {
        type: String
    }
})

module.exports = mongoose.model('FbUser', Schema)