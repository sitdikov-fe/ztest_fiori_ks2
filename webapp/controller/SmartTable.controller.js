sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel){
    "use strict";
    var oModel;
    return Controller.extend("ztest_fiori_ks.controller.SmartTable", {
        // onInit: function() {
        //     oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZTEST_FIORI_KOSI_SRV/", true);
        //     this.getView().byId("oSelectData").setModel(oModel);
        //   }
        onInit: function () {

			var oModel = this.getView().getModel();
			var sSet = "/sap/opu/odata/sap/ZTEST_FIORI_KOSI_SRV/";
			oModel.read(sSet, {
				success: function (oData) {
					var oModelMNA = new JSONModel();
					oModelMNA.setData(oData.results);
					this.getView().setModel(oModelMNA, "oModelMNA");
				}.bind(this),
				error: function (oResponse) {
					sap.m.MessageToast.show("oData fetching failed");
				}
			});

		},
        onInitialise: function (oEvent) {

			var oTable = oEvent.getSource().getTable();
			var aColumns = oTable.getColumns();

			for (var i = 0; i < aColumns.length; i++) {
				var sPath = "oModelMNA>" + aColumns[i].data("p13nData").columnKey;
				aColumns[i].getTemplate().getDisplay().bindText(sPath);
				aColumns[i].getTemplate().getEdit().bindValue(sPath);
			}

			oTable.bindRows("oModelMNA>/");
		}
    });
});