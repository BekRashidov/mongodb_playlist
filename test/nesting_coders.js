const assert = require('assert');
const mongoose = require('mongoose');
const Programmer = require('../models/programmer');

describe('Nesting Records', function(){

    beforeEach(function(done){
        mongoose.connection.collections.programmers.drop(function(){
            done();
        });

    });
    //Creating test
    it('Creates a Programmer with sub-documents', function(done){
        var pat = new Programmer({
            name: 'Ogabek Rashidov',
            languages: [{name: 'Python', experience_year: 2}]
        });

        pat.save().then(function(){
            Programmer.findOne({}).then(function(record){
                assert(record.languages.length === 1);
                done();

            });
        });

    });
    it('Adds a second Software Developer', function(done){
        var pat = new Programmer({
            name: 'Sardorbek Rashidov',
            languages: [{name: 'JavaScript', experience_year: 1}]
        });
        pat.save().then(function(){
            Programmer.findOne({}).then(function(record){
                assert(record.languages.length === 1);
                done();

            });
        });

    });



});