const { Sequelize } = require('sequelize')

module.exports.sequelize = new Sequelize('test-db', 'user', 'pass', {
    host: './Database/ChatAplication.sqlite',
    dialect: 'sqlite',
    //  logging: false
});

