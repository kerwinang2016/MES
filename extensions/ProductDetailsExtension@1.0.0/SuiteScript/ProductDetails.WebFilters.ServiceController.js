/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// ProductDetails.WebOptions.ServiceController.js
// ----------------
// Service to manage credit cards requests
define(
	'ProductDetails.WebFilters.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Application'
	,	'ProductDetails.WebFilters.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	Application
	,	WebFiltersModel
	)
	{
		'use strict';

		// @class ProductDetails.WebOptions.ServiceController  Manage product details request
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name: 'ProductDetails.WebFilters.ServiceController'

			// @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLoggedInPPS: true
				}
			}

			// @method getUser
			// @return {Integer} user id
		,	getUser: function()
			{
				var user = ModelsInit.session.isLoggedIn2() ? nlapiGetUser() : 0
				,	role = ModelsInit.context.getRoleId();

				// This is to ensure customers can't query other customer's product lists.
				if (role !== 'shopper' && role !== 'customer_center')
				{
					user = parseInt(this.request.getParameter('user') || (this.data.owner && this.data.owner.id) || user, 10);
				}
				return user;
			}

			// @method getId
			// @return {String} internalid
		,	getId: function()
			{
				return this.request.getParameter('internalid') || this.data.internalid;
			}

		,	get: function()
			{

				var id = this.getId()
				,	user = this.getUser();
				//id is item id
				return WebFiltersModel.get(id);
			}

		});
	}
);
