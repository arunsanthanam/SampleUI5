sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/ui/model/json/JSONModel"
               ], function (Controller,JSON) {
	"use strict";
	return Controller.extend("sap.ui.demo.roll.controller.App", {

		onInit : function () {
			// show a native JavaScript alert
			var oModel = new JSONModel();
			oModel.loadData("JSON/Data.JSON");
			this.getView().setModel(oModel); 
			//console.log("Value of oModel" + oModel.getData());
		},
		selectionChange: function (oEvent) {
			//console.log("oEvent value ==>" + oEvent);
			console.log(oEvent.getParameters("SelectedItem").selectedItem.getProperty("key"))
			var oModel_new = new JSONModel();
			var oModel_old = this.getView().getModel();
			var Arr = [];
			//for (var i = 0; oModel_old.getData().Student.length >i; i++) {
			for(var i in oModel_old.getData().Student){
				//if (oModel_old.getData().Student[i].MyTeacher == "334893") {
					if(oModel_old.getData().Student[i].MyTeacher == oEvent.getParameters("SelectedItem").selectedItem.getProperty("key")){
					Arr.push(oModel_old.getData().Student[i]);
				} 
			}
			oModel_new.setData({Student:Arr});
			this.getView().setModel(oModel_new,"NewModel");
		}
	});
});
