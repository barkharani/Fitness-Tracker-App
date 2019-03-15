const mongoose = require('mongoose')
Schema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
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
    },
    fbId: {
        type: String
    },
    role: {
        type: String
    }
})

module.exports = mongoose.model('Users', Schema)