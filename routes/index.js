module.exports = function (app) {
    //app.use (express.static('static'));


    var renderMW = require('../middleware/generic/render');
    var authMW = require('../middleware/generic/auth');
    var loginMW = require('../middleware/generic/loginMW');
    const bodyParser = require('body-parser');

    var objrep = {};

    app.get('/login',
        renderMW(objrep, 'login'));
    app.post('/login',
        bodyParser.urlencoded({extended: true}),
        loginMW()
    );
    app.get('/',
        authMW(),
        renderMW(objrep, 'index')
    );

};
