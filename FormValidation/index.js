const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());

app.use(cookieParser("aaaaaaaqweqwe"));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUnitilized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get('/', (req, res) => {
    var emailError = req.flash('emailError');
    var pontosError = req.flash('pontosError');
    var nameError = req.flash('nameError');

    emailError = emailError == undefined || emailError.length == 0 ? undefined : emailError

    res.render("index.ejs", {emailError, pontosError, nameError})
})

app.post('/form', (req, res) => {
    const {email, name, pontos} = req.body
    
    var emailError;
    var pontosError;
    var nameError;

    if(email == undefined || email == "") {
        emailError = "Email is required.";
    }

    if(pontos == undefined || pontos < 20) {
        pontosError = "Pontos must be between 20 and 50 characters long.";
    }

    if(name == undefined || name == "") {
        nameError = "name is required.";
    }

    if(emailError !== undefined && pontosError !== undefined && nameError !== undefined) {
        req.flash('emailError', emailError);
        req.flash('nameError', nameError);
        req.flash('pontosError', pontosError);
        res.send('top')
    } else {
        res.send('não top')
    }
})

app.listen(3000, (req, res) => {
    console.log('Express server listening on http://localhost:3000');
});