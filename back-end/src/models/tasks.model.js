const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const Task = sequelize.define('tasks', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.TIME
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

module.exports = { Task }