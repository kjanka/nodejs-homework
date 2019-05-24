/**
 *
 * ez a MW kezeli az autentikaciot, minden muvelet elvegzesehez bejelentkezett felhasznalonak kell lenni
 * (kiveve persze a bejelentkezest)
 *
 */

var requireOption = require("../common").requireOption;

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.session.logged === "undefined" || req.session.logged !== true) {
            return res.redirect("/login");
        }

        return next();

    };
};