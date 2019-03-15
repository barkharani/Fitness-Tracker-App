const User = require('../../models/users')


module.exports = {
    async getUser(req, res) {
        const { login } = req.params
        const user = await User.findOne({login})
        res.send = user
    },

    async setUser(req, res) {
        try {
            const user = await User.findOne({ email: req.query.email})
            res.status(200).json({user})  
            
        } catch (error) {
            console.log(error)
        }
    },

    async setFbUser(req, res) {
        try {
            const user = await User.findOne({ fbId: req.query.fbId})
            res.status(200).json({user})
        } catch (error) {
            console.log(error)
        }
    },

    async setParams(req, res) {
        const {sex, phone, weight, height} = req.query
        let query = {}
        if (sex) {
            query.sex = sex
        }
        if (phone) {
            query.phone = phone
        }
        if (weight) {
            query.weight = weight
        }
        if (height) {
            query.height = height
        }
        await User.updateOne({email: req.query.email}, {
            $set: {
                ...query
            }
        })
    },

    async uploadPhoto(req, res) {
        try {
            await User.updateOne({email: req.file.originalname}, {
                $set: {
                    photo: `${req.file.filename}`
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}