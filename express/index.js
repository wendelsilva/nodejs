const express = require('express'); // recebe o express
const app = express(); // carrega o express na variavel app


app.get("/", (req, res) => {
    res.send("<h1>Bem vindo ao meu repositorio de estudos em nodejs</h1>"); // enviando uma resposta
}); // criando a rota recebendo o req(requisicao) e o res(resposta)

app.get("/blog", (req, res) => {
    res.send("<h3>bem vindo ao meu blog: https://github.com/wendelsilva</h3>")
})

app.get("/canal/youtube", (req, res) => {
    res.send("<h1>bem vindo ao meu canal do youtube</h1>")
})

app.listen(4000, erro => {
    if(erro) {
        console.log('Ocorreu um erro: ' + erro);
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
}) // abre o servidor express na porta 4000