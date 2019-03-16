/**
 *
 * Ez a MW elmenti a szerkesztett vendeget.
 * Ha minden ok, tovabbkuld a vendegek listajara.
 * Ha nem, akkor a szerkesztesnel maradunk.
 */

var requireOption = require("../common").requireOption;

module.exports = function(objectrepository){
    return function(req, res, next){
        console.log("guest save mw");
        return next();
    };
};