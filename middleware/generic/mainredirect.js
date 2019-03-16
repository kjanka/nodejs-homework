/**
 *
 * Ez a mw fog atiranyitani a megfelelo kezdolapra
 * -bejelentkezes utan a fooldalra
 * -ha nem vagyunk bejelentkezve, akkor a bejelentkezeshez
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};