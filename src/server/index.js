import  Express  from 'express';
// const express = require('express');
const app = Express();
app.get('/',function(req,res){
    res.send(`<h1>welcome to server</h1>`);
});
app.listen(8080,function(err){
    if(err){
        console.log(err);
    }
    console.log("server stared at");
})