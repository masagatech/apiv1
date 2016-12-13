var items = require('../appmodule/items.js');
var emp = require('../appmodule/employee.js');
var acgroup = require('../appmodule/acgroup.js');
var headmenu = require('../appmodule/menu.js');



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
    //#################### ac group  /  ##########################	
    app.post("/getAcgroup", acgroup.getAcgroup);
    //#############################################################################################
      //#################### head menu  /  ##########################	
    app.post("/getmenu", headmenu.getmenu);
    //#############################################################################################

    //#################### API TEST /  ##########################	
}

module.exports = appRouter;