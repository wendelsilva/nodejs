const { Sequelize } = require('sequelize'); // importando o Sequelize

const connection = new Sequelize('guiaperguntas', 'root', 'qwe123' ,{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;