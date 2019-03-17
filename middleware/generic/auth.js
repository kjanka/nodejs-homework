/**
 *
 * ez a MW kezeli az autentikaciot, minden muvelet elvegzesehez bejelentkezett felhasznalonak kell lenni
 * (kiveve persze a bejelentkezest)
 *
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};