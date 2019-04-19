const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Guest = mongoose.model('Guest',{
    name: {
        type: String,
        required:true
    },
    category: {
        type: Number,
        required:true
    }
});

module.exports = Guest;