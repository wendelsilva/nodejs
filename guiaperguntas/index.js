const express = require("express"); // importando express
const app = express(); // criando express app

app.set('view engine', 'ejs'); // setando o motor de views como ejs

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang  = req.params.lang;
    var showMsg = false;
    res.render("index", {
        nome: nome, 
        lang: lang,
        empresa: "DayTera",
        seguidores: 80,
        msg: showMsg
    });
});

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
})