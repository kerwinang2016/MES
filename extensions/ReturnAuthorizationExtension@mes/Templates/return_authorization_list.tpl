{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

{{#if showBackToAccount}}
	<a href="/" class="return-authorization-list-button-back">
		<i class="return-authorization-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<section class="return-authorization-list">
	<header class="return-authorization-list-header">
		<h2>{{pageHeader}}</h2>
	</header>
<div class="returns-authorization-terms">
<p>For prompt service on processing your returns/exchange requests:</p>
<p>Please go to Support Cases, and Submit a Case with the following details:</p>
<ul>
<li>1. reason for return/exchange</li>
<li>2. your order#</li>
<li>3. any updated contact info</li>
<li>4. pictures might be required in case of product defects or damaged goods received.</li>
</ul>
<p>Returns/exchange requests cannot be processed online, please use the support cases feature in your account for prompt service. we encourage use of support cases feature to document all transactions accurately and to help clients in a timely manner.</p>
<p>thank you for trusting medicaleshop.com and using the customer center.</p>
<p>medicaleshop customer success team is here to help.........</p>
<p>&nbsp;</p>
</div>	
	{{#if showMessage}}
		<div data-view="Message"></div>
	{{/if}}

	<div data-view="ListHeader.View"></div>

	<div class="return-authorization-list-container">
		{{#if isResultLengthGreaterThan0}}
			
			<table class="return-authorization-list-results-list">
				<thead class="return-authorization-list-content-table">
					<tr class="return-authorization-list-content-table-header-row">
						<th class="return-authorization-list-content-table-header-row-title">
							<span>{{translate 'Return No.'}}</span>
						</th>
							<th class="return-authorization-list-content-table-header-row-date">
							<span>{{translate 'Date'}}</span>
						</th>
						</th>
							<th class="return-authorization-list-content-table-header-row-date">
							<span>{{translate 'Items'}}</span>
						</th>
						<th class="return-authorization-list-content-table-header-row-currency">
							<span>{{translate 'Amount'}}</span>
						</th>
						<th class="return-authorization-list-content-table-header-row-status">
							<span>{{translate 'Status'}}</span>
						</th>
					</tr>
				</thead>
				<tbody data-view="Records.List" class="return-authorization-list-records-list"></tbody>
			</table>

			{{#if showPagination}}
				<div class="return-authorization-list-paginator">
					<div data-view="GlobalViews.Pagination"></div>
					{{#if showCurrentPage}}
						<div data-view="GlobalViews.ShowCurrentPage"></div>
					{{/if}}
				</div>
			{{/if}}
			
		{{else}}
			{{#if isLoading}}
				<p class="return-authorization-list-empty">{{translate 'Loading...'}}</p>
			{{else}}
				<div class="return-authorization-list-empty-section">
					<h5>{{translate 'No returns were found TESTING'}}</h5>
				</div>
			{{/if}}
		{{/if}}
	</div>
</section>




{{!----
Use the following context variables when customizing this template: 
	
	pageHeader (String)
	showMessage (Boolean)
	isResultLengthGreaterThan0 (Boolean)
	isLoading (Boolean)
	showBackToAccount (Boolean)
	showPagination (Boolean)

----}}
