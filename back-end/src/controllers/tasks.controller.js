const { Task } = require('../models/tasks.model');

const now = new Date();

const findAll = async (req, res) => {
    try {
        const result = await Task.findAll({});
        res.send(result);
    } catch (err) {
        console.log(err.message);
    }
}

const create = async (req, res) => {
    try {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            created_at: now,
            status: req.body.status
        });
        res.send(req.body.title + ' a été créé.');
    } catch (err) {
        console.log(err.message);
    }
}

const update = async (req, res) => {
    try {
        Task.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        }, {
            where: {
                id: req.params.id
            }
        })
        res.send(req.body.title + ' a été modifié.')
    } catch (err) {
        console.log(err.message);
    }
}

const destroy = async (req, res) => {
    try {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send('Tâche supprimée.')
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    findAll,
    create,
    update,
    destroy
}