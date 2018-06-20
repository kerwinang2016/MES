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
	'ProductDetails.WebOptions.Model'
,	[
		'SC.Model'
	,	'SC.Models.Init'
	,	'Application'
	,	'Utils'
	,	'Configuration'
	,	'underscore'
	, 'ProductDetails.WebSelections.Model'
	, 'ProductDetails.WebFilters.Model'
	]
,	function (
			SCModel
		,	ModelsInit
		,	Application
		,	Utils
		,	Configuration
		,	_
		, WebSelections
		, WebFilters
	)
{
	'use strict';
	return SCModel.extend({

		name: 'ProductDetails.WebOptions'

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

		// Returns a product item WebOptions list or based on a given id
	,	search: function (user, id, internalid)
		{
			this.verifySession();
			var websiteoptions = [], websiteselections = [], websitefilters = [];
			var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;
			filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
			if(internalid)
			filters.push(new nlobjSearchFilter('internalid',null,'anyof',internalid));
			if(id)
			filters.push(new nlobjSearchFilter('custrecord_wo_itemrelated',null,'anyof',id));
			columns.push(new nlobjSearchColumn('custrecord_wo_required'));
			columns.push(new nlobjSearchColumn('custrecord_wo_inputtype'));
			columns.push(new nlobjSearchColumn('custrecord_wo_description'));
			columns.push(new nlobjSearchColumn('name'));
			columns.push(new nlobjSearchColumn('internalid'));
			columns.push(new nlobjSearchColumn('custrecord_wo_donotshowbydefault'));
			columns.push(new nlobjSearchColumn('custrecord_is_shipping_option'));
			var order = new nlobjSearchColumn('custrecord_wo_order')
			order.setSort()
			columns.push(order);
			search = nlapiCreateSearch('customrecord_website_options',filters,columns);
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
						recorddata.selections = WebSelections.search(null,res[i].getValue('internalid'))
						recorddata.filters = WebFilters.search(null,res[i].getValue('internalid'))
						websiteoptions.push(recorddata);
					}
					searchid+=1000;
				}
			}while(res && res.length == 1000);

			return websiteoptions;
		}
	,	get: function (id, internalid)
		{
			this.verifySession();
			var websiteoptions = [], websiteselections = [], websitefilters = [];
			var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;
			filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
			if(internalid)
			filters.push(new nlobjSearchFilter('internalid',null,'anyof',internalid));
			if(id)
			filters.push(new nlobjSearchFilter('custrecord_wo_itemrelated',null,'anyof',id));
			columns.push(new nlobjSearchColumn('custrecord_wo_required'));
			columns.push(new nlobjSearchColumn('custrecord_wo_inputtype'));
			columns.push(new nlobjSearchColumn('custrecord_wo_description'));
			columns.push(new nlobjSearchColumn('name'));
			columns.push(new nlobjSearchColumn('internalid'));
			columns.push(new nlobjSearchColumn('custrecord_wo_donotshowbydefault'));
			columns.push(new nlobjSearchColumn('custrecord_is_shipping_option'));
			var order = new nlobjSearchColumn('custrecord_wo_order')
			order.setSort()
			columns.push(order);
			search = nlapiCreateSearch('customrecord_website_options',filters,columns);
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
						websiteoptions.push(recorddata);
					}
					searchid+=1000;
				}
			}while(res && res.length == 1000);

			return websiteoptions;
		}


		// Sanitize html input
	,	sanitize: function (text)
		{
			return text ? text.replace(/<br>/g, '\n').replace(/</g, '&lt;').replace(/\>/g, '&gt;') : '';
		}

	});
});
