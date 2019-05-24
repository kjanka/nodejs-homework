var requireOption = require("../common").requireOption;

module.exports = function (o) {
    return function (req, res, next) {
        console.log('test');
        if(!(typeof req.body.username === 'undefined') || !(typeof req.body.password === 'undefined')) {
            if (req.body.username === "a" && req.body.password === "a") {
                req.session.logged = true;
                req.session.save();
                return res.redirect('/');
            } else {
                res.redirect('/login');
            }
        }
    }
};