/**
 *
 * This mw deletes a chosen guest and redirects the user to the guest list
 */

var requireOption = require("../common").requireOption;
var Guest = require('../../models/guest');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("guest torles mw");

        if (typeof (res.locals.currentGuest) === 'undefined') {
            return res.redirect("/guests");
        } else {
            console.log("removing");
            res.locals.currentGuest.remove(err => {
                return res.redirect("/guests");
            });
        }
    };
};