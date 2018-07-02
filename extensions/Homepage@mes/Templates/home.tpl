{{!
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<div class="home">
	<div class="home-banner-top">
		<!--<p class="home-banner-top-message">
			{{translate 'Use promo code <strong>SCADEMO</strong> for <strong>30%</strong> off your purchase'}}
		</p> -->
	</div>
	<div class="home-slider-container">
		<div class="home-image-slider">
			<ul data-slider class="home-image-slider-list">
				{{#each carouselImages}}
					<!-- <li>
						<div class="home-slide-main-container">
							<div class="home-slide-image-container">
								<img src="{{resizeImage this ../imageHomeSize}}" alt="" />
							</div>

							<!--<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now</a>
								</div>
							</div> -->
						</div>
					</li> -->
				{{else}}
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/Tilite-ZRA-Series-2-Ultralight-Rigid-Manual-Wheelchair4.jpg' ../imageHomeSize)}}" alt="" />
						</div>

						<!--<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>-->
					</div>
				</li>

				<!-- <li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-2.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-3.png' ../imageHomeSize)}}" alt="" />
						</div>

						<div class="home-slide-caption">
							<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
							<p>Example descriptive text displayed on multiple lines.</p>
							<div class="home-slide-caption-button-container">
								<a href="/search" class="home-slide-caption-button">Shop Now</a>
							</div>
						</div>
					</div>
				</li> -->
				
				{{/each}}
			</ul>
		</div>
	</div>

	<div class="home-banner-main">
	{{#each bottomBannerImages}}
    	<div class="home-banner-main-cell-nth{{@index}}">
    		<div class="home-banner-main-cell-bg">
        		<img src="{{resizeImage this ../imageHomeSizeBottom}}" alt="" >
    		</div>
   		</div>
	{{else}}
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-special-needs-seating.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-strollers-and-pushchair.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-gait-trainer-and-walkers.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-special-needs-standers.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-patient-lifts.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="#"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-bath-safety-aids.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>		
    {{/each}}
	</div>

<!--4 Boxes-->	
<h1 style="text-transform: uppercase;padding-top:10px;padding-bottom:20px;margin-bottom:25px;border-bottom:1px dotted #cccccc;text-align:left">SERVICES</h1>
	<div class="row">
		<div class="col-xs col-sm-6 col-md-3">
			<a target="blank" href="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/pdfs/order-form-mes.pdf"><img src="http://netsuite.medicaleshop.in/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/purchase-order.jpg" /></a>
		</div>
		<div class="col-xs col-sm-6 col-md-3">
			<img src="http://netsuite.medicaleshop.in/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/part-accessories.jpg" />
		</div>
		<div class="col-xs col-sm-6 col-md-3">
			<img src="http://netsuite.medicaleshop.in/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/authorized-dealer.jpg" />
		</div>
		<div class="col-xs col-sm-6 col-md-3">
			<img src="http://netsuite.medicaleshop.in/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/retail-stores.jpg" />
		</div>
	</div>
<!--4 Boxes-->	

<!--special needs brands logo -->
<div style="padding-top:25px;padding-bottom:25px;">
	<h1 style="text-transform: uppercase;padding-top:10px;padding-bottom:20px;border-bottom:1px dotted #cccccc;text-align:left">Special needs products by popular brands:</h1>
	<div class="row">
		<div class="col-xs-4 col-md-2 col-md-offset-1"><a href="#" title="Click to see more products from Broda Seating">
			<img class="img-responsive" src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/brands/broda-logo.jpg" alt="Broda Seating"></a>
		</div>
		<div class="col-xs-4 col-md-2"><a href="#" title="Click to see more products from Easystand">
			<img class="img-responsive" src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/brands/easystand-logo.jpg" alt="Easystand"></a>
		</div>
		<div class="col-xs-4 col-md-2"><a href="#" title="Click to see more products from Liko Lifts">
			<img class="img-responsive" src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/brands/liko.jpg" alt="Hoyer Lifts"></a>
		</div>
		<div class="col-xs-4 col-md-2"><a href="#" title="Click to see more products from Quickie Wheelchairs">
			<img class="img-responsive" src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/brands/quickie_wheelchairs.jpg" alt="Quickie Wheelchairs"></a>
		</div>
		<div class="col-xs-4 col-md-2"><a href="#" title="Click to see more products from r82">
			<img class="img-responsive" src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/brands/r82.jpg" alt="r82" width="200"></a>
		</div>
	</div>
</div>	
<!--special needs brands logo -->

	<div class="home-merchandizing-zone">
		<div data-id="your-merchandising-zone" data-type="merchandising-zone"></div>
	</div>
</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
