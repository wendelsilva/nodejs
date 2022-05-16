const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('../articles/Article');
const slugify = require('slugify');

router.get("/admin/articles", (req,res) => {
    Article.findAll({
        include: [{
            model: Category
        }]
    }).then(articles => {
        res.render("admin/articles/index", {
            articles: articles
        });
    })
})

router.get("/admin/articles/new", (req,res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {
            categories: categories
        });
    });
})

router.post("/articles/save", (req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;


    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    })
})

router.get("/admin/articles/edit/:id", (req, res) => {
    var id = req.params.id;

    Article.findByPk(id).then(article => {
        if(article != undefined) {
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {
                    article: article,
                    categories: categories
                });
            })
        } else {
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
})

router.post("/articles/delete/", (req, res) => {
    var id = req.body.id

    if(id != undefined) {
        if(!isNaN(id)) {

            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            })

        } else {
            res.redirect("/admin/articles");
        }
    } else {
        res.redirect("/admin/articles");
    }
})

router.post("/articles/update", (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.update({
        title: title,
        body: body,
        categoryId: category,
        slug: slugify(title),
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/admin/articles");
    }).catch(err => {
        res.redirect("/");
    })
})

router.get("/articles/page/:num", (req, res) => {
    var page = req.params.num;
    var offset = 0;

    var pageNumber = parseInt(page);

    if(isNaN(page) || page == 1 || page == 0) {
        offset = 0;
    } else {
        offset = (pageNumber - 1) * 4
    }

    console.log(offset);

    Article.findAndCountAll({
        limit: 4,
        offset: offset
    }).then(article => {

        var next;
        if(offset + 4 >= article.count) {
            next = false;
        } else {
            next = true;
        }

        var result = {
            next: next,
            article: article
        }

        Category.findAll().then(categories => {
            res.render("admin/articles/page", {
                categories: categories,
                result: result
            });
        })
    })
})

module.exports = router;