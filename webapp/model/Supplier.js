sap.ui.define([
	"sap/ui/base/ManagedObject"
], function (ManagedObect) {
	"use strict";
	return ManagedObect.extend('be.wl.ManagedObjectDemo.model.Supplier', {
		metadata: {
			properties: {
				supplierId: "string",
				name:"string"
			}
		}
	});
});