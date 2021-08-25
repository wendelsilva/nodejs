const express = require('express'); // recebe o express
const app = express(); // carrega o express na variavel app


app.get("/", (req, res) => {
    res.send("<h1>Bem vindo ao meu repositorio de estudos em nodejs</h1>"); // enviando uma resposta
}); // criando a rota recebendo o req(requisicao) e o res(resposta)

app.get("/blog/:artigo?", (req, res) => {

    var artigo = req.params.artigo; // recebendo o parametro da url

    if(artigo) {
        res.send("<h1>Artigo: " + artigo + "</h1>");
    } else {
        res.send("<h3>bem vindo ao meu blog: https://github.com/wendelsilva</h3>")
    }
}) // passando parametro não obrigatorio nome na rota

app.get("/canal/youtube", (req, res) => {
    var canal = req.query["canal"]; // recebendo o parametro da url

    if(canal) {
        res.send("<h1>canal: " + canal + "</h1>");
    } else {
        res.send("<h3>Nenhum canal fornecido</h3>")
    }
})

app.get("/ola/:nome/:empresa", (req, res) => {
    // req são os dados enviados pelo usario
    // res são os dados que serao enviados para o usuario
    var nome = req.params.nome; // recebendo o parametro nome
    var empresa = req.params.empresa; // recebendo o parametro empresa
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>");
}) // passando parametro obrigatorio nome na rota

app.listen(4000, erro => {
    if(erro) {
        console.log('Ocorreu um erro: ' + erro);
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
}) // abre o servidor express na porta 4000