module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = function(){
        return function(req, res, next){
            return next();
        };
    };

    var renderMW = require('../middleware/generic/render');

    var objrep = {};
    app.get('/rules', authMW(),
        renderMW(objrep, 'rules')
    );

}