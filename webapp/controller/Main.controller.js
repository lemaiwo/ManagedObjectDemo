sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../state/DemoState",
	"sap/ui/model/base/ManagedObjectModel"
], function (Controller,DemoState,ManagedObjectModel) {
	"use strict";
	return Controller.extend("be.wl.ManagedObjectDemo.controller.Main", {
		onInit: function () {
			this.getView().setModel(new ManagedObjectModel(new DemoState()));
		}
	});
});