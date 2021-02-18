const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema and model
const LanguageSchema = new Schema({
    name: String,
    experience_year: Number
});

const ProgrammerSchema = new Schema({
    name: String,
    languages: [LanguageSchema]
});

const Programmer = mongoose.model('programmer', ProgrammerSchema);
module.exports = Programmer;
