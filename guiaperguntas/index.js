const express = require("express"); // importando express
const app = express(); // criando express app
const bodyParser = require("body-parser"); // importando body-parser
const connection = require("./database/database"); // importando a conexão com o banco de dados
const Pergunta = require("./database/Pergunta"); // importando o model de perguntas
const Resposta = require("./database/Resposta"); // importando o model de respostas

// Database
connection
    .authenticate() // tentando conectar com o banco de dados   
    .then(() => {
        console.log("Conectado com sucesso!");
    }) // se conseguir conectar
    .catch((err) => {
        console.log(err);
    }) // caso não consiga conectar, mostra o erro

app.set('view engine', 'ejs'); // setando o motor de views como ejs
app.use(express.static('public')); // setando o diretório public como pasta estática

app.use(bodyParser.urlencoded({ extended: false })); // setando o body-parser
app.use(bodyParser.json()); // permite ler forms enviados via json


//Rotas
app.get("/", (req, res) => {
    // buscando todas as perguntas no banco de dados
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC'] // ordenando por id em ordem decrescente
    ] }).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        });
    })
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    })
})

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;

    Pergunta.findOne({
        where: { id: id },
    }).then(pergunta => {
        if (pergunta != undefined) { // se a pergunta existir
            Resposta.findAll({
                where: { perguntaId: pergunta.id }, // buscando todas as respostas da pergunta
                order:[
                    ['id', 'DESC']
                ] // ordenando por id em ordem decrescente'
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            })
        } else { // se a pergunta não existir
            res.redirect("/");
        }
    }) // buscando a pergunta no banco de dados
})

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.perguntaId;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    })
})

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
})