module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = function(){
        return function(req, res, next){
            return next();
        };
    };
    var renderMW = require('../middleware/generic/render');
    var saveRoom = require('../middleware/rooms/saveRoom');
    var loadRoom = require('../middleware/rooms/loadRoom');
    var delRoom = require('../middleware/rooms/delRoom');
    var loadRooms = require('../middleware/rooms/loadRooms');
    var Room = require('../models/room');
    const bodyParser = require('body-parser');

    var objrep = {};
    app.get('/rooms/add',
        authMW(),
        loadRoom(objrep),
        renderMW(objrep, 'edit_room'),
        );
    app.post('/rooms/add',
        authMW(),
        bodyParser.urlencoded({ extended: true }),
        saveRoom(objrep)
        );
    app.get('/rooms/del/:_id',
        authMW(),
        loadRoom(objrep),
        delRoom(objrep)
        );
    app.get('/rooms/mod/:_id',
        authMW(),
        loadRoom(objrep),
        renderMW(objrep, 'edit_room')
        );
    app.post('/rooms/mod/:_id',
        authMW(),
        loadRoom(objrep),
        bodyParser.urlencoded({ extended: true }),
        saveRoom(objrep)
        );
    app.get('/rooms',
        authMW(),
        loadRooms(objrep),
        renderMW(objrep, 'rooms')
        );
};
