sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel){
    "use strict";
    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        onInit: function() {
			var oDate = new sap.ui.model.json.JSONModel({
				date: new Date()
			}) ;
			this.getView().setModel(oDate);
          }
    });
});