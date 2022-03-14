const Sequelize = require('sequelize'); // importando o Sequelize
const connection = require("./database") // importando a conexão com o banco de dados

// criando a tabela perguntas
const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING, // tipo string para textos curtos
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT, // tipo texto para textos longos
        allowNull: false
    }
})

// sincronizando a tabela com o banco de dados
Pergunta.sync({ force: false })
    .then(() => {
        console.log("Tabela criada com sucesso!")
    }) 

module.exports = Pergunta;