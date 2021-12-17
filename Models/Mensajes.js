const { DataTypes } = require('sequelize');
const { sequelize } = require('../Database/connection');


const Mensajes = sequelize.define('Mensajes', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    msg: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
});

module.exports = Mensajes;