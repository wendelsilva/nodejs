const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTSecret = 'wdfwhqjwe&*¨45091238ru%$%ysdb@#!vs'

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function auth(req, res, next) {
    const authToken = req.headers['authorization'];

    if(authToken !== undefined) {

        const bearer = authToken.split(' ');
        const token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if(err) {
                res.status(401);
                res.json({err: "Token inválido"})
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email}
                next();
            }
        })

    } else {
        res.status(401);
        res.json({ error: 'token inválido' });
    }
}


const DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: 'wendel',
            email: 'wendel@gmail.com',
            password: '123'
        },
        {
            id: 20,
            name: 'silva',
            email: 'silva@gmail.com',
            password: 'qwe'
        }
    ]
}

app.get("/games", auth,(req, res) => {
    

    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", auth,(req, res)  => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id);

        if(game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404);
        }
    }

});

app.post("/game", auth,(req, res) => {
    var {title, year, price} = req.body;

    DB.games.push({
        id: 3,
        title,
        year,
        price
    });

    res.sendStatus(201);

});

app.delete("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id)
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id == id);

        if(game != undefined) {
            var {title, year, price} = req.body;

            if(title != undefined) {
                game.title = title;
            }

            if(year != undefined) {
                game.year = year;
            }

            if(price != undefined) {
                game.price = price;
            }

            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
});

app.post("/auth",(req, res) => {
    var { email, password } = req.body;

    if(email != undefined) {

        var user = DB.users.find(user => user.email === email);
        if(user != undefined) {

            if(user.password === password) {
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (err, token) => {
                    if(err) {
                        res.status(400)
                        res.json({message: 'falha interna'})
                    } else {
                        res.status(200);
                        res.json({token: token})
                    }
                })
     
            } else {
                res.status(401);
                res.json({error: "credenciais inválidas"})
            }

        } else {
            res.status(404);
            res.json({ message: "Usuário não encontrado" });
        }

    } else {
        res.status(400);
        res.json({ error: "O email enviado é invalido" });
    }
})


app.listen(3000, () => {
    console.log('servidor rodando');
});