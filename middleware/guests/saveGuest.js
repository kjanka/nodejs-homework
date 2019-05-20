/**
 *
 * This mw checks if a guest is new or one that's been modified
 * Adter that, it gathers the attributes from the edit page and saves the guest to the db
 */
var requireOption = require("../common").requireOption;
var Guest = require('../../models/guest');
const mongoose = require('mongoose');
var Schema = require('mongoose').Schema;
mongoose.connect('mongodb://localhost/nbksp5');


module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("guest check mw");
        if (typeof (req.body) !== 'undefined') {
            if (typeof(res.locals.currentGuest) !== 'undefined') {
                Guest.updateOne({ _id: req.params._id }, { name: req.body.name, category: req.body.category}, function(err, res) {
                });
                return res.redirect("/guests");

            }else {
                let newGuest = new Guest();
                newGuest.name = req.body.name;
                newGuest.category = req.body.category;
                newGuest.save(function(err){
                    console.log("guest saved");
                });
                console.log("ide futottam");

                return res.redirect("/guests");
            }
        }
    };
};