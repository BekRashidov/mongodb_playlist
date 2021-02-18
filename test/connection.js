const mongoose = require('mongoose');

//ES6 Promises

//connect to database before tests run
before(function(done){
    //connect to mongoDB
    mongoose.connect('mongodb://localhost/codersdb');

    mongoose.connection.once('open', function(){
       console.log('Server bilan aloqa bor ishni boshlashingiz mumkin!')
       done();
    }).on('error', function(error){
        console.log('Connection error: ', error)
    });
});