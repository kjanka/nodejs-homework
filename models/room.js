const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Room = mongoose.model('Room',{
    cleaning: {
        type: Boolean,
        default: false
    },
    category: {
        type: Number,
        required: true,
        default: 1
    },
    name: {
        type: String,
        required: false,
        default: "Default room name"
    }
});

module.exports = Room;