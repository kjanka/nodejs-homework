module.exports = function(app){
    //app.use (express.static('static'));

    var authMW = function(){
        return function(req, res, next){
            return next();
        };
    };
    var renderMW = require('../middleware/generic/render');
    var checkRoom = require('../middleware/rooms/checkRoom');
    var saveRoom = require('../middleware/rooms/saveRoom');
    var loadRoom = require('../middleware/rooms/loadRoom');
    var delRoom = require('../middleware/rooms/delRoom');
    var loadRooms = require('../middleware/rooms/loadRooms');

    var objrep = {};
    app.get('/rooms/add',
        authMW(),
        renderMW(objrep, 'edit_room'),
        checkRoom(objrep),
        saveRoom(objrep)
        );
    app.post('/rooms/add',
        authMW(),
        checkRoom(objrep),
        saveRoom(objrep)
        );
    app.get('/rooms/del/:id',
        authMW(),
        loadRoom(objrep),
        delRoom(objrep)
        );
    app.get('/rooms/mod/:id',
        authMW(),
        renderMW(objrep, 'edit_room'),
        loadRoom(objrep),
        checkRoom(objrep),
        saveRoom(objrep)
        );
    app.post('/rooms/mod/:id',
        authMW(),
        loadRoom(objrep),
        checkRoom(objrep),
        saveRoom(objrep)
        );
    app.get('/rooms',
        authMW(),
        loadRooms(objrep),
        renderMW(objrep, 'rooms')
        );
};
