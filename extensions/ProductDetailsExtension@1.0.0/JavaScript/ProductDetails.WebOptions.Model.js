/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductList
define('ProductDetails.WebOptions.Model'
,	[	'ProductDetails.WebFilters.Collection'
	,	'ProductDetails.WebSelections.Collection'
	,	'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		ProductDetailsWebFiltersCollection
	, ProductDetailsWebSelectionsCollection
	,	_
	,	Backbone
	)
{
	'use strict';

	// @class ProductList.Model Model for handling Product Lists (CRUD) @extends Backbone.Model
	return Backbone.Model.extend(
	{
		urlRoot: _.getAbsoluteUrl('services/ProductDetails.WebOptions.Service.ss')

	,	defaults : {
			name: ''
		,	description: ''
		, selection: new ProductDetailsWebSelectionsCollection()
		, filters: new ProductDetailsWebFiltersCollection()
		}

		// redefine url to avoid possible cache problems from browser
	,	url: function()
		{
			var base_url = Backbone.Model.prototype.url.apply(this, arguments)
			,	url_params = { t: new Date().getTime() };

			return _.addParamsToUrl(base_url, url_params);
		}

	,	initialize: function (attributes)
		{
			this.on('change:filters', function (model, items)
			{
				if (model.previous('filters') instanceof ProductDetailsWebFiltersCollection)
				{
					model.set('filters', model.previous('filters'), {silent: true});
					model.get('filters').reset(items);
				}
				else
				{
					model.set('filters', new ProductDetailsWebFiltersCollection(items), {silent: true});
				}
			});
			this.trigger('change:filters', this, attributes && attributes.filters || []);

			this.on('change:selections', function (model, items)
			{
				if (model.previous('selections') instanceof ProductDetailsWebSelectionsCollection)
				{
					model.set('selections', model.previous('selections'), {silent: true});
					model.get('selections').reset(items);
				}
				else
				{
					model.set('selections', new ProductDetailsWebSelectionsCollection(items), {silent: true});
				}
			});
			this.trigger('change:selections', this, attributes && attributes.selections || []);
		}
	});
});
