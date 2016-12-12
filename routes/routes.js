var items = require('../appmodule/items.js');
var emp = require('../appmodule/employee.js');


var appRouter = function(app) {
    //############# API Details 
    var APIInfo = {
            ver: "1.0",
            type: "REST API",
            requestdata: "JSON",
            responsedata: "JSON",
        }
        //#############################################################################################


    //#############################################################################################
    //#################### Items /  ##########################	

    app.post("/getItems", items.getItems);
    app.post("/getEmployee", emp.getEmployee);


    //#############################################################################################

    //#################### API TEST /  ##########################	
}

module.exports = appRouter;