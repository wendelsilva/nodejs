var http = require("http");

http.createServer((requisicao, resposta) => {
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>https://github.com/wendelsilva<h4>"); // adicioando o código HTML que será exibido na página
}).listen(3000); // criando servidor http na porta onde o servidor http está escutando
console.log("Servidor rodando em http://localhost:8181");