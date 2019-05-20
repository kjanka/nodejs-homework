const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;

var Booking = mongoose.model('Booking',{
    start_date: Date,
    end_date: Date,
    _room:{
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    _guest:{
        type: Schema.Types.ObjectId,
        ref: 'Guest',
        required: true
    }
});

module.exports =  Booking;