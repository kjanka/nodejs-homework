module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = function(){
        return function(req, res, next){
            return next();
        };
    };

var renderMW = require('../middleware/generic/render');
    var checkGuest = require('../middleware/guests/checkGuest');
    var saveGuest = require('../middleware/guests/saveGuest');
    var loadGuest = require('../middleware/guests/loadGuest');
    var delGuest = require('../middleware/guests/delGuest');
    var loadGuests = require('../middleware/guests/loadGuests');

    var Guest = require('../models/guest');

    const bodyParser = require('body-parser');

var objrep = {};
app.get('/guests/add', authMW(),
    renderMW(objrep, 'edit_guest'),
    );
app.post('/guests/add',
    authMW(),
    bodyParser.urlencoded({ extended: true }),
    saveGuest(objrep)
    );
app.get('/guests/del/:_id',
    authMW(),
    loadGuest(objrep),
    delGuest(objrep)
    );
app.get('/guests/mod/:_id',
    authMW(),
    loadGuest(objrep),
    renderMW(objrep, 'edit_guest')
    );
app.post('/guests/mod/:_id',
    authMW(),
    loadGuest(objrep),
    bodyParser.urlencoded({ extended: true }),
    saveGuest(objrep)
    );
app.get('/guests',
    authMW(),
    loadGuests(objrep),
    renderMW(objrep, 'guests')
    );
};