sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast){
    "use strict";
    var oModel;

    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        onInit: function() {
            oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_FIORI_KOSI_SRV/", true);
            this.getView().byId("oSelectData").setModel(oModel);
            console.log("init");
            console.log(oModel);
          },
          onAddRow:  function(oData) {
            var readurl = "/ztestStr001Set";
            oModel.read(readurl, {
				success : function(oData, oResponse) {
                    this.getView().byId("oSelectData").getModel().refresh(true);
				}.bind(this)
			});
          }
    });
});