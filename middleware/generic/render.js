/**
 * ez a render mw
 */
/*var db ={
    getAll: function(){
        return "db";
    }
};*/

module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        //res.end('Render: ' + viewName);
        //res.render(viewName, res.tpl);
        res.end("Template: " + viewName );
    };

};