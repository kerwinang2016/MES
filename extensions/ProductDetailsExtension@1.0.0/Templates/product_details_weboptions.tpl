{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}
{{#if showCells}}
	<aside class="product-details-weboptions-content">
		<h3 class="product-details-weboptions-title">{{translate view_header}}</h3>
		<p class="required">* Required Fields</p>
		<div class="product-details-weboptions-row">
			<div data-type="backbone.collection.view.rows"></div>
		</div>

	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	collection (Array)
	showCells (Boolean)

----}}
