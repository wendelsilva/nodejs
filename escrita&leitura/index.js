const fs = require('fs');

// fs.readFile('./wendel.silva',{encoding: 'utf8'},(erro, dados) => {
//     if(erro) {
//         console.log("ocorreu uma falha durante a leitura do arquivo")
//     } else {
//         console.log(dados);
//     }
// });

// fs.writeFile('./wendel.silva',"Novo conteudo do arquivo", (erro) => {
//     if(erro) {
//         console.log("erro durante o salvamento");
//     }
// });

fs.readFile('./usuario.json',{encoding: 'utf8'},(erro, dados) => {
    if(erro) {
        console.log("ocorreu uma falha durante a leitura do arquivo")
    } else {
        var conteudo = JSON.parse(dados);
        conteudo.nome = "Silva Wendel"
        console.log(conteudo);

        fs.writeFile('./usuario.json', JSON.stringify(conteudo), (erro) => {
            if(erro) {
                console.log("erro durante a escrita");
            }
        });
    }
});