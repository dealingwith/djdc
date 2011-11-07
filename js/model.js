
var App = {};

App.Model = function() {

    // model subscriptions


	
    /*
    * private vars and functions
    *
    */

    var data;

    var getData = function() {
        
        $.ajax({
            url     : 'foo.json',
            dataType: 'json',
            async   : true,
            data    : shows,
            success : function(data) {
                data = data;
            },
            error: function(error) {
                console.error(error);
            }
        });

    };


    /*
    * public vars and functions
    *
    */

    var obj = {

        init: function() {
        },


    };

    return obj;

}();
