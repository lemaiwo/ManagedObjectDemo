sap.ui.define([
	"sap/ui/base/ManagedObject",
	"../service/NorthwindService",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"../model/Supplier"
], function (ManagedObect, NorthwindService, Filter, FilterOperator, Supplier) {
	"use strict";
	return ManagedObect.extend('be.wl.ManagedObjectDemo.state.DemoState', {
		metadata: {
			properties: {
				name: "string",
				nameIsValid: "boolean"
			},
			aggregations: {
				suppliers: {
					type: 'be.wl.ManagedObjectDemo.model.Supplier',
					multiple: true
				}
			},
			events: {}
		},
		init: function () {},
		setName: function (value) {
			this.setProperty("name", value);
			if (!value || value.length < 3) {
				this.setProperty("nameIsValid", false);
				this.removeAllSuppliers();
				return false;
			}
			this.setProperty("nameIsValid", true);

			var aFilters = [new Filter({
				path: "Name",
				operator: FilterOperator.Contains,
				value1: value.toUpperCase(),
				caseSensitive: false
			})];

			return NorthwindService.getSuppliersWithFilter(aFilters).then(oSuppliersResult => {
				this.removeAllSuppliers();
				oSuppliersResult.data.results.forEach(oSupplier => this.addSupplier(new Supplier({
					supplierId: oSupplier.ID,
					name: oSupplier.Name
				})));
				return this.getSuppliers();
			});
		}
	});
});