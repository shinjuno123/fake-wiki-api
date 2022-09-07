"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const _ = require("lodash");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/wikiDB');

const wikiSchema = {
    title: String,
    content: String
};

const Article = mongoose.model("articles", wikiSchema);


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// *************** Request Targetting All Articles **************


app.route("/articles")
    .get(async function (req, res) {
        try {
            const article = await Article.find();
        
            if (!article) {
                res.send("No articles.");
            } else {
                res.send(article);
            }
        } catch (err) {
            return res.send("Failed to call articles");
        }
    })
    .post(async function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        try {
            await newArticle.save();
            res.send("Successfully added a new article");
        } catch (err) {
            res.send(err);
        };
    })
    .delete(async function (req, res) {
        try {
            await Article.deleteMany();
            res.send("Successfully deleted all articles");
        } catch (err) {
            res.send(err);
        }
});

// *************** Request Targetting Specific Article **************

app.route("/articles/:articleTitle")
    .get(async function (req, res) {
        try{
            const foundArticle = await Article.findOne({ title: req.params.articleTitle });
        
            if (!foundArticle) {
                res.send("No articles matching that title was found.");
            } else {
                res.send(foundArticle);
            }
        } catch (err){
            res.send(err);
        }

    })
    .put(async function(req, res){

        try{
            await Article.findOneAndUpdate(
                {title: req.params.articleTitle},
                {
                    title: req.body.title,
                    content: req.body.content
                }
                ,
                {overwrite:true}
            );
            res.send("Successfully updated an article");
        } catch (err){
            res.send("Failed to update an article");
        }
    })
    .patch(async function(req, res){
        try{
            await Article.findOneAndUpdate(
                {title: req.params.articleTitle},
                {$set: req.body}
            );
            res.send("Successfully updated an article");
        } catch (err){
            res.send("Failed to update an article");
        } 
    })
    .delete(async function(req, res){
        try{
            await Article.deleteOne({title:req.params.articleTitle});

            res.send("Succeessfully deleted an article");
        } catch (err){
            res.send("Failed to delete an article");
        }
    
    })




app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});