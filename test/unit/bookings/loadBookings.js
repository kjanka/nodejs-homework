var loadBookings = require("../../../middleware/bookings/loadBookings");

var expect = require('chai').expect;

describe("login middleware", function () {
    it("should load all bookings if found", function () {

        var aBooking = {
            array: [
                {
                    _id: "mock id 1",
                    _room:
                        "mock room id 1",
                    _guest:
                        "mock guest id 1",
                    start_date:
                        "mock start date 1",
                    end_date:
                        "mock end date 1"
                }
                ,
                {
                    _id: "moch id 2",
                    _room:
                        "mock room id 2",
                    _guest:
                        "mock guest id 2",
                    start_date:
                        "mock start date 2",
                    end_date:
                        "mock end date 2"
                }],
            find: function(){
                return array;
            }




        };

        var aRes = {
            

        };

        var aReq = {

        };
        loadBookings()({
            Booking: aBooking,

        },
            aReq, aRes, function ()
            {
            done();
        });


    });


});