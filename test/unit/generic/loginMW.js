var login = require("../../../middleware/generic/loginMW");

var expect = require('chai').expect;

describe("login middleware", function () {
    it("should redirect to login page if username and/or pw is wrong", function () {

        var aReq = {

            body: {
                username: "b",
                password: "b"
            },
            logged: false,
            session: {
                save: function(){
                    //console.log('mock session saved');
                }
            }
        };

        var aRes = {
            redirect: function (newurl) {
                //console.log(newurl);
                expect(newurl).be.eql("/login");
            }
        };

        login()(aReq, aRes, function () {
            done();
        });

    });


    it("should redirect to index if everything's fine", function () {


        var aReq = {

            body: {
                username: "a",
                password: "a"
            },
            logged: false,
            session: {
                save: function(){
                    //console.log('mock session saved');
                }
            }
        };

        var aRes = {
            redirect: function (newurl) {
                //console.log(newurl);
                expect(newurl).be.eql("/");
            }
        };

        login()(aReq, aRes, function () {
            done();
        });

    });

    });