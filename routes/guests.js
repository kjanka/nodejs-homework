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

var objrep = {};
app.get('/guests/add', authMW(),
    renderMW(objrep, 'guestadd'),
    checkGuest(objrep),
    saveGuest(objrep)
    );
app.post('/guests/add',
    authMW(),
    checkGuest(objrep),
    saveGuest(objrep)
    );
app.get('/guests/del/:id',
    authMW(),
    loadGuest(objrep),
    delGuest(objrep)
    );
app.get('/guests/mod/:id',
    authMW(),
    renderMW(objrep, 'guestmod'),
    loadGuest(objrep),
    checkGuest(objrep),
    saveGuest(objrep)
    );
app.post('/guests/mod/:id',
    authMW(),
    loadGuest(objrep),
    checkGuest(objrep),
    saveGuest(objrep)
    );
app.get('/guests',
    authMW(),
    renderMW(objrep, 'guestmod'),
    loadGuests(objrep)
    );
};