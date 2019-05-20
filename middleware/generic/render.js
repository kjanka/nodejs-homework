/**
 * This is the render mw
 */
/*var db ={
    getAll: function(){
        return "db";
    }
};*/

module.exports = function (objectrepository, viewName) {
    return function (req, res, next) {
        //res.end('Render: ' + viewName);
        objectrepository.req = req;
        objectrepository.res = res;

        res.render(viewName, objectrepository);
        console.log(viewName);
        //res.end("Template: " + viewName );
        next();
    };

};