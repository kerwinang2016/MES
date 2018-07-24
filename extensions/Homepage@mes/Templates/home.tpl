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
					<li>
						<!--<div class="home-slide-main-container">
							<div class="home-slide-image-container">
								<a href="#"><img src="img/Tilite-ZRA-Series-2-Ultralight-Rigid-Manual-Wheelchair4.jpg" alt="" /></a>
							</div>-->

							<!--<div class="home-slide-caption">
								<h2 class="home-slide-caption-title">SAMPLE HEADLINE</h2>
								<p>Example descriptive text displayed on multiple lines.</p>
								<div class="home-slide-caption-button-container">
									<a href="/search" class="home-slide-caption-button">Shop Now</a>
								</div>
							</div> -->
						</div>
					</li> 
				{{else}}
				<li>
					<div class="home-slide-main-container">
						<div class="home-slide-image-container">
							<!--<img src="{{getThemeAssetsPath (resizeImage 'img/carousel-home-1.png' ../imageHomeSize)}}" alt="" />-->
							<a href="#"><img src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/Tilite-ZRA-Series-2-Ultralight-Rigid-Manual-Wheelchair4.jpg" alt="" /></a>
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
	<h1 class="home-heading-products">PRODUCTS</h1>
	{{#each bottomBannerImages}}
    	<div class="home-banner-main-cell-nth{{@index}}">
    		<div class="home-banner-main-cell-bg">
        		<img src="{{resizeImage this ../imageHomeSizeBottom}}" alt="" >
    		</div>
   		</div>
	{{else}}
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/special-needs-kids/special-needs-seating"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-special-needs-seating.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/special-needs-kids/strollers-pushchairs"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-strollers-and-pushchair.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/special-needs-kids/gait-trainers-walkers"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-gait-trainer-and-walkers.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/special-needs-kids/special-needs-standers"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-special-needs-standers.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
      	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/patient-lifts"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-patient-lifts.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>
     	<div class="home-banner-main-cell-nth0">
      		<div class="home-banner-main-cell-bg">
        		<a href="http://mes.stairlifteshop.com/bath-safety-aids"><img src="{{getThemeAssetsPath (resizeImage 'img/category/home-page-bath-safety-aids.jpg' ../imageHomeSizeBottom)}}" alt="" ></a>
        	</div>
      	</div>		
    {{/each}}
	</div>

<!--4 Boxes-->	
<h1 class="home-headings">SERVICES</h1>
<div class="container-fluid">
	<div class="row">
		<div class="col-xs col-sm-6 col-md-3 img-padding">
			<a target="blank" href="pdfs/order-form-mes.pdf"><img src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/purchase-order.jpg" /></a>
		</div>
		<div class="col-xs col-sm-6 col-md-3 img-padding">
			<img src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/part-accessories.jpg" />
		</div>
		<div class="col-xs col-sm-6 col-md-3 img-padding">
			<img src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/authorized-dealer.jpg" />
		</div>
		<div class="col-xs col-sm-6 col-md-3 img-padding">
			<a target="blank" href="https://www.homehealthpavilion.com"><img src="http://mes.stairlifteshop.com/SSP Applications/NetSuite Inc. - SCA Kilimanjaro/Development/img/retail-stores.jpg" /></a>
		</div>
</div>
</div>
<!--4 Boxes-->	

<!--special needs brands logo -->
<div class="brands-logo">
	<h1 class="home-headings">Special needs products by popular brands:</h1>
<div class="container-fluid">
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
</div>
<!--special needs brands logo -->

<!--Merchandising zone-->
<section class="home-page-merchandising">
<div data-id="home-featured-products" data-type="merchandising-zone"></div>
</section>

</div>

{{!----
Use the following context variables when customizing this template:

	imageHomeSize (String)
	imageHomeSizeBottom (String)
	carouselImages (Array)
	bottomBannerImages (Array)

----}}
