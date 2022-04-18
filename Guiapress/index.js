const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

const Article = require('./articles/Article');
const Category = require('./categories/Category');

// View engine setup
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    }).catch((err) => {
        console.log('Erro ao se conectar: ' + err);
    })


app.use("/", categoriesController);
app.use("/", articlesController);

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(3000, () => {
  console.log('O servidor está rodando!');
});