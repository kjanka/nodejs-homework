const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Room = mongoose.model('Room',{
    cleaning: Boolean,
    category: {
        type: Number,
        required: true,
        default: false
    }
});

module.exports = Room;