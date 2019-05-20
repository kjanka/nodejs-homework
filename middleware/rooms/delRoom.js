/**
 *
 * This mw deletes a chosen room and redirects to the room list
 *
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("room torles mw");
        if (typeof (res.locals.currentRoom) === 'undefined') {
            return res.redirect("/rooms");
        } else {
            console.log("removing");
            res.locals.currentRoom.remove(err => {
                return res.redirect("/rooms");
            });
        }

    };
};