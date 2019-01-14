var express = require('express');

var app = new express();

var parser = require('body-parser');
//require('babel-register');

require('./database.js');
var React = require('react');
var GroceryItem = require("./models/GroceryItem.js");


//express will get the response and render up the index.ejs file and serve it up on server port 7777
app.get('/', function(req,res){
    res.render('./../app/index.ejs',{});

    //these implementations are if you make it isomporhic
//    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
//    GroceryItem.find(function(error, doc){
//        var generated = React.renderToString(application({items: doc}));
//        res.render('./../app/index.ejs',{reactOutput: generated});
   

}).use(express.static(__dirname+ '/../.tmp'))
.listen(7777);

app.use(parser.json());

//handle post requests with express
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);