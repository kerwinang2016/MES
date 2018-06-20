/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// @module ProductDetails
define(
	'ProductDetails.WebOptions.View'
,	[
		'SC.Configuration'
	, 'Backbone.CollectionView'
	,	'ProductDetails.WebOptions.Collection'
	,	'ItemRelations.WebOptions.View'
//	,	'Tracker'

	,	'product_details_weboptions.tpl'
	,	'product_details_weboptions_row.tpl'
	,	'product_details_weboptions_cell.tpl'

	,	'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Configuration
	, BackboneCollectionView
	,	WebOptionsCollection
	,	ItemRelationsWebOptionsView
//	,	Tracker

	, product_details_weboptions_tpl
	,	product_details_weboptions_row_tpl
	,	product_details_weboptions_cell_tpl

	,	Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	// @class ProductDetails.Information.View @extends Backbone.View
	return BackboneCollectionView.extend({

		events: {
		}

		//@method initialize Override default method to allow passing pre-calculated details
		//@param {ProductDetails.Information.View.InitializationOptions} options
		//@return {Void}
	,	initialize: function initialize ()
		{
			var is_sca_advanced = Configuration.get('siteSettings.sitetype') === 'ADVANCED'
			,	collection = is_sca_advanced ? new WebOptionsCollection({itemsIds: this.options.itemsIds}) : new Backbone.Collection()
			,	layout = this.options.application.getLayout()
			,	self = this;

			BackboneCollectionView.prototype.initialize.call(this, {
				collection: collection
			,	viewsPerRow: Infinity
			,	cellTemplate: product_details_weboptions_cell_tpl
			,	rowTemplate: product_details_weboptions_row_tpl
			,	childView: ItemRelationsWebOptionsView
			,	template: product_details_weboptions_tpl
			, childViewOptions: {parentView:self}
			});

			if (is_sca_advanced)
			{
				//layout.once('afterAppendView', self.loadWebOptions, self);
				layout.currentView && layout.currentView.once('afterCompositeViewRender', self.loadWebOptions, self);
			}
		}

	,	loadWebOptions: function loadWebOptions ()
		{
			var self = this;

			self.collection.fetchItems().done(function()
			{
				//Tracker.getInstance().trackProductList(self.collection, 'Correlated Items');
				self.render();
			});
		}
	,	getContext: function ()
		{
			return {
				view_header: "Configure size options/accessories available:"
				,	details: this.details
				,	view: this
				, showCells: !!this.collection.length
			};
		}

	});
});


//@class ProductDetails.Information.View.InitializationOptions
//@property {Array<ProductDetails.Information.DataContainer>?} details
//@property {Product.Model} model
//
