/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductDetails.WebOptions.Model
// @class ProductDetails.WebOptions.Model
// Handles creating, fetching and updating Product List Items @extends SCModel
define(
	'ProductDetails.WebSelections.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Application'
	,	'Utils'
	,	'Configuration'

	,	'underscore'
	]
,	function (
			SCModel
		,	ModelsInit
		,	Application
		,	Utils
		,	Configuration

		,	_)
{
	'use strict';
	return SCModel.extend({

		name: 'ProductDetails.WebSelections'

		// @property {Configuration.webOptions} configuration General settings
	,	configuration: {loginRequired: false}

		// @method verifySession @throws {unauthorizedError}it if the user has not the appropriate session for accessing product lists.
	,	verifySession: function()
		{
			if (this.configuration.loginRequired && !ModelsInit.session.isLoggedIn2())
			{
				throw unauthorizedError;
			}
		}
	,	get: function(id){
		var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;

		//ItemSelections

		filters.push(new nlobjSearchFilter('internalid',null,'is',id));
		filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
		columns.push(new nlobjSearchColumn('custrecord_wis_relatedwebsiteoption'));
		columns.push(new nlobjSearchColumn('custrecord_wis_price'));
		columns.push(new nlobjSearchColumn('custrecord_wis_hint'));
		columns.push(new nlobjSearchColumn('custrecord_wis_image'));
		columns.push(new nlobjSearchColumn('custrecord_wis_sku'));
		columns.push(new nlobjSearchColumn('name'));
		columns.push(new nlobjSearchColumn('internalid'));
		var order = new nlobjSearchColumn('custrecord_wis_order')
		order.setSort();
		columns.push(order);
		search = nlapiCreateSearch('customrecord_website_itemselection',filters,columns);
		resultSet = search.runSearch();
		do{
			res = resultSet.getResults(searchid,searchid+1000);
			if(res && res.length > 0){
				if(!cols)
					cols = res[0].getAllColumns();
				for(var i=0; i<res.length; i++){
					var recorddata = {};
					for(var j=0; j<cols.length; j++){
						var jointext= cols[j].join?cols[j].join+"_":'';
						recorddata[jointext+cols[j].name] = res[i].getValue(cols[j]);
						if(res[i].getText(cols[j]))
						recorddata[jointext+cols[j].name+"text"] = res[i].getText(cols[j]);
					}
					websiteselections.push(recorddata);
				}
				searchid+=1000;
			}
		}while(res && res.length == 1000);
		return websiteselections;
	}
		// Returns a product item WebOptions list or based on a given id
	,	search: function (itemid, optionid)
		{
			var websiteselections = [];
			var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;

			//ItemSelections
			if(itemid)
			filters.push(new nlobjSearchFilter('custrecord_wo_itemrelated','custrecord_wis_relatedwebsiteoption','anyof',itemid));
			if(optionid)
			filters.push(new nlobjSearchFilter('custrecord_wis_relatedwebsiteoption',null,'anyof',optionid));

			filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
			columns.push(new nlobjSearchColumn('custrecord_wis_relatedwebsiteoption'));
			columns.push(new nlobjSearchColumn('custrecord_wis_price'));
			columns.push(new nlobjSearchColumn('custrecord_wis_hint'));
			columns.push(new nlobjSearchColumn('custrecord_wis_sku'));
			columns.push(new nlobjSearchColumn('custrecord_wis_image'));
			columns.push(new nlobjSearchColumn('name'));
			columns.push(new nlobjSearchColumn('internalid'));

			var order = new nlobjSearchColumn('custrecord_wis_order')
			order.setSort();
			columns.push(order);
			search = nlapiCreateSearch('customrecord_website_itemselection',filters,columns);
			resultSet = search.runSearch();
			do{
				res = resultSet.getResults(searchid,searchid+1000);
				if(res && res.length > 0){
					if(!cols)
						cols = res[0].getAllColumns();
					for(var i=0; i<res.length; i++){
						var recorddata = {};
						for(var j=0; j<cols.length; j++){
							var jointext= cols[j].join?cols[j].join+"_":'';
							recorddata[jointext+cols[j].name] = res[i].getValue(cols[j]);
							if(res[i].getText(cols[j]))
							recorddata[jointext+cols[j].name+"text"] = res[i].getText(cols[j]);
						}
						websiteselections.push(recorddata);
					}
					searchid+=1000;
				}
			}while(res && res.length == 1000);
			return websiteselections;
		}


		// Sanitize html input
	,	sanitize: function (text)
		{
			return text ? text.replace(/<br>/g, '\n').replace(/</g, '&lt;').replace(/\>/g, '&gt;') : '';
		}

	});
});
