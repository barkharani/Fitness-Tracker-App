const Users = require('../../models/users')
const FBUSER = require('../../models/fb')
const ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const randtoken = require('rand-token')
const graph = require('fbgraph')
const axios = require('axios')


module.exports = {

    async facebook(req, res) {
        try {
            const user = await Users.findOne({fbId: req.body.params.id})
            if (!user) {
                await Users.create({fbId: req.body.params.id,
                    first_name: req.body.params.name,
                    role: 'fb',
                    token: randtoken.generate(32),
                })
            }
        } catch (error) {
            console.log(error)
        }
    },

    async signUp(req, res) {
        
        try {
            const user = await Users.findOne({ _id: ObjectID(req.params.id) })
            const data = JSON.parse(req.body.data)
            await updateBd(
                data.id,
                {
                    first_name: data.first_name,
                    password: bcrypt.hashSync(data.password, salt),
                    email: data.email,
                    token: randtoken.generate(32),
                    // photo: req.file.filename
                }
            )
            res.status(200).json({ ok: true })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'user exists' })
        }
    },

    async signIn(req, res) {
        try {
            const user = await Users.findOne({ email: req.body.email})
            const comparePwd = await bcrypt.compare(req.body.password, user.password)
            if (comparePwd) {
                res.status(200).json({ok: true})            
              } else {
                res.status(500).json({error: 'user not found'})
            }
        } catch (error) {
            res.status(500).json({error: 'Internal Error'})
        }
    },
}


async function updateBd(id, params) {
    await Users.updateOne(
        { _id: ObjectID(id) },
        {
            ...params
        },
        { upsert: true }
    )
}