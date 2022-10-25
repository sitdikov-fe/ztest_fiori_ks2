sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel){
    "use strict";
    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        onInit: function() {
            //  this.getView().bindElement("/ztestStr001Set('0002')");
            var oModel = new sap.ui.model.json.JSONModel([{
                "ID": 1000
            }]);
            this.getView().setModel(oModel);
          }
    });
});