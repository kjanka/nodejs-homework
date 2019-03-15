module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = function(){
        return function(req, res, next){
            return next();
        };
    };
    var renderMW = require('../middleware/generic/render');

    var objrep = {};
    app.get('/rooms/add', authMW(), renderMW(objrep, 'roomadd'));
    app.post('/rooms/add', authMW());
    app.get('/rooms/del/:id', authMW());
    app.get('/rooms/mod/:id', authMW(), renderMW(objrep, 'rooommod'));
    app.post('/rooms/mod/:id', authMW());
    app.get('/rooms', authMW(), renderMW(objrep, 'roomlist'));
};

/*
 get+post /rooms/add - uj szoba
get /rooms/del/:id - torles
 get+post /rooms/mod/:id - modositas
get /rooms - lista
*/
