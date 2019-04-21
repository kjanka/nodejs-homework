const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Room = mongoose.model('Room',{
    cleaning: Boolean,
    category: {
        type: Number,
        required: true,
        default: false
    },
    name: {
        type: String,
        required: false,
        default: "Default room name"
    }
});

module.exports = Room;