"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/wikiDB');

const wikiSchema ={
    title:String,
    content: String
}

const Article = mongoose.model("articles",wikiSchema);


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/articles',async function(req, res){
    try{
        const article = await Article.find();
        res.send(article);
    }catch(error){
        res.send(error);
    }
})

app.listen(port, function(){
    console.log(`Server started on port ${port}`);
})