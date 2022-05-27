var  mongoose = require('mongoose');

var express = require('express')



mongoose.connect("mongodb://localhost/TechNewsDataBase2",{

    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const con = mongoose.connection

con.on('open',function(){

    console.log('connected ...')
    
    
    })

