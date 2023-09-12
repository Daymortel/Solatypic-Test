const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users.model');

const create = async (req, res) => {
    try {
        User.create({
            username: req.body.username,
            password: crypto.createHash('sha256').update(req.body.password).digest('hex')
        });
        res.send(req.body.username + ' a été créé.');
    } catch (err) {
        console.log(err.message);
    }
}

const login = async (req, res) => {
    try {
        const result = await User.findOne({
            where: {
                username: req.body.username,
                password: crypto.createHash('sha256').update(req.body.password).digest('hex')
            }
        });
        if (result) {
            const user = {
                id: result.id,
                username: result.username,
                password: result.password
            }
            const token = jwt.sign(user, 'key');
            res.send({ 'token' : token })
        } else {
            res.json('Identifiants incorrectes !')
        }
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    create,
    login
}