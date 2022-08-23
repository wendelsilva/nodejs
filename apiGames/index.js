const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    ]
}

app.get("/games",(req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/game/:id", (req, res)  => {
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

app.post("/game", (req, res) => {
    var {title, year, price} = req.body;

    DB.games.push({
        id: 3,
        title,
        year,
        price
    });

    res.sendStatus(201);

});

app.delete("/game/:id", (req, res) => {
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

app.put("/game/:id", (req, res) => {
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
})

app.listen(3000, () => {
    console.log('servidor rodando');
});