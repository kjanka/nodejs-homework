/**
 *
 * This mw deletes a chosen booking from the db
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("booking torles mw");
        if (typeof (res.locals.currentBooking) === 'undefined') {
            return res.redirect("/bookings");
        } else {
            console.log("removing");
            res.locals.currentBooking.remove(err => {
                return res.redirect("/bookings");
            });
        }
    };
};