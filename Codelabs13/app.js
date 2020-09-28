var express = require('express');
var path = require('path');
var http= require('http')
var app = express();
var url='http://api.openweathermap.org/data/2.5/weather?q=Hanoi&units=metric&appid=7923029bc80eb9ace037f21f499fe803';
app.get('/', function(req,res){
var req = http.get(url,function(response){
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });
    response.on('end', function (err){
        data=JSON.parse(buffer)
        console.log(data.main)
        res.render('../views/index.pug', {temp: data})
    })
        
})

    
   });
module.exports = app;
