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
	'ProductDetails.WebFilters.Model'
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

		name: 'ProductDetails.WebFilters'

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
	, get: function(id){
		var websitefilters = [];
		var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;
		//We are getting the reference option filters
		//ItemFilters
		filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
		if(id)
		filters.push(new nlobjSearchFilter('internalid',null,'anyof',id));
		columns.push(new nlobjSearchColumn('custrecord_wof_woref'));
		columns.push(new nlobjSearchColumn('custrecord_wof_isref'));
		columns.push(new nlobjSearchColumn('custrecord_wof_affectedoptions'));
		columns.push(new nlobjSearchColumn('custrecord_wof_affectedselection'));
		columns.push(new nlobjSearchColumn('internalid'));
		search = nlapiCreateSearch('customrecord_website_options_filters',filters,columns);
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
					websitefilters.push(recorddata);
				}
				searchid+=1000;
			}
		}while(res && res.length == 1000);
		return websitefilters;

	}
		// Returns a product item WebOptions list or based on a given id
		//@id is the internalid of the website option
	,	search: function ( itemid, optionid)
		{
			var websitefilters = [];
			var filters = [], columns = [], search = null, res = null, cols = null, searchid = 0, resultSet = null;
			//We are getting the reference item
			//ItemFilters
			if(itemid)
			filters.push(new nlobjSearchFilter('custrecord_wo_itemrelated','custrecord_wof_woref','anyof',itemid));
			if(optionid)
			filters.push(new nlobjSearchFilter('custrecord_wof_woref',null,'anyof',optionid));

			filters.push(new nlobjSearchFilter('isinactive',null,'is','F'));
			columns.push(new nlobjSearchColumn('custrecord_wof_woref'));
			columns.push(new nlobjSearchColumn('custrecord_wof_isref'));
			columns.push(new nlobjSearchColumn('custrecord_wof_affectedoptions'));
			columns.push(new nlobjSearchColumn('custrecord_wof_affectedselection'));
			columns.push(new nlobjSearchColumn('internalid'));
			search = nlapiCreateSearch('customrecord_website_options_filters',filters,columns);
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
						websitefilters.push(recorddata);
					}
					searchid+=1000;
				}
			}while(res && res.length == 1000);
			return websitefilters;
		}
		// Sanitize html input
	,	sanitize: function (text)
		{
			return text ? text.replace(/<br>/g, '\n').replace(/</g, '&lt;').replace(/\>/g, '&gt;') : '';
		}

	});
});
