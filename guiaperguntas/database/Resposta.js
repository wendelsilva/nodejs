const Sequelize = require('sequelize'); // importando o Sequelize
const connection = require("./database") // importando a conexão com o banco de dados

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT, // tipo texto para textos longos
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER, // tipo inteiro
        allowNull: false
    }
})

Resposta.sync({ force: false })

module.exports = Resposta;