/*
 * Copyright (c) 2018 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
		
	// -----------------------------------------------------
	// ---------------    IMAGE TO SVG    ------------------
	// -----------------------------------------------------

	function beny_tm_imgtosvg(){

		jQuery('img.svg').each(function(){

			var jQueryimg 		= jQuery(this);
			var imgClass		= jQueryimg.attr('class');
			var imgURL			= jQueryimg.attr('src');

			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var jQuerysvg = jQuery(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

				// Replace image with new SVG
				jQueryimg.replaceWith(jQuerysvg);

			}, 'xml');

		});
	}
	beny_tm_imgtosvg();

	// -----------------------------------------------------
	// ---------------  HAMBURGER  -------------------------
	// -----------------------------------------------------

	function beny_tm_hamburger(){

		var hamburger 		= jQuery('.hamburger');
		var mobileMenu		= jQuery('.beny_tm_mobile_menu_wrap');

		hamburger.on('click',function(){
			var element 	= jQuery(this);

			if(element.hasClass('is-active')){
				element.removeClass('is-active');
				mobileMenu.slideUp();
			}else{
				element.addClass('is-active');
				mobileMenu.slideDown();
			}
			return false;
		});
	}
	beny_tm_hamburger();

	// -----------------------------------------------------
	// --------------    MAGNIFIC POPUP    -----------------
	// -----------------------------------------------------

	function beny_tm_magnific_popup(){

		jQuery('.open-popup-link').magnificPopup({
			type:'inline',
			midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
		});

		jQuery('.gallery').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		});
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				//type: 'iframe',
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}
	beny_tm_magnific_popup();

	// -----------------------------------------------------
	// --------------------    JARALLAX    -----------------
	// -----------------------------------------------------

	function beny_tm_jarallax(){

		jQuery('.jarallax').each(function(){
			var element			= jQuery(this);
			var	customSpeed		= element.data('speed');

			if(customSpeed !== "undefined" && customSpeed !== ""){
				customSpeed = customSpeed;
			}else{
				customSpeed 	= 0.5;
			}

			element.jarallax({
				speed: customSpeed
			});
		});
	}
	beny_tm_jarallax();

	// -------------------------------------------------
	// -----------------    PORTFOLIO    ---------------
	// -------------------------------------------------

	// filterable 

	function beny_tm_portfolio(){

		if(jQuery().isotope) {

			// Needed variables
			var list 		 = jQuery('.beny_tm_portfolio_list');
			var filter		 = jQuery('.beny_tm_portfolio_filter');

			if(filter.length){
				// Isotope Filter 
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});	

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});	
			}
		}
	}
	beny_tm_portfolio();

	function beny_tm_projects() {

		jQuery('.beny_tm_portfolio_animation_wrap').each(function() {
			jQuery(this).on('mouseenter', function() {
				if (jQuery(this).data('title')) {
					jQuery('.beny_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
					jQuery('.beny_tm_portfolio_titles').addClass('visible');
				}

				jQuery(document).on('mousemove', function(e) {
					jQuery('.beny_tm_portfolio_titles').css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				});
			}).on('mouseleave', function() {
				jQuery('.beny_tm_portfolio_titles').removeClass('visible');
			});
		});
	}
	beny_tm_projects();

	// -----------------------------------------------------
	// ------------    NAV BACKGROUND  SCROLL    -----------
	// -----------------------------------------------------

	function beny_tm_nav_bg_scroll(){

		var header 			= jQuery('.beny_tm_header');
		var headerH 		= header.outerHeight();
		var WH	 			= jQuery(window).height();
		var windowScroll	= jQuery(window).scrollTop();
		var W				= jQuery(window).width();

		if(W>1040){
			jQuery(window).scroll(function(){
				if(windowScroll >= WH-headerH){
					header.addClass('scroll');
				}
				else{
					header.removeClass('scroll');  
				}
			});
			if(windowScroll >= WH-headerH){
				header.addClass('scroll');
			}
			else{
				header.removeClass('scroll');  
			}
		} 
	}
	beny_tm_nav_bg_scroll();

	// -----------------------------------------------------
	// ------------    ANCHOR NAVIGATION    ----------------
	// -----------------------------------------------------

	function beny_tm_anchor(){

		jQuery('.anchor_nav').onePageNav();

		var scrollOffset = 0;

		jQuery(".anchor a").on('click', function(evn){
			evn.preventDefault();
			jQuery('html,body').scrollTo(this.hash, this.hash, {
				gap: { y: -scrollOffset },
				animation:{
					duration: 1500,
					easing: "easeInOutExpo"
				}
			});
			return false;	
		});
	}
	beny_tm_anchor();

	// -----------------------------------------------------
	// ----------------    CONTACT FORM    -----------------
	// -----------------------------------------------------

	function beny_tm_contact_form(){

		jQuery(".contact_form #send_message").on('click', function(){

			var name 		= jQuery(".contact_form #name").val();
			var email 		= jQuery(".contact_form #email").val();
			var message 	= jQuery(".contact_form #message").val();
			var subject 	= jQuery(".contact_form #subject").val();
			var success     = jQuery(".contact_form .returnmessage").data('success');

			jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
			//checking for blank fields	
			if(name===''||email===''||message===''){

				jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
			}
			else{
				// Returns successful data submission message when the entered information is stored in database.
				jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

					jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


					if(jQuery(".contact_form .returnmessage span.contact_error").length){
						jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
					}else{
						jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
						jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
					}

					if(data===""){
						jQuery("#contact_form")[0].reset();//To reset form fields on success
					}

				});
			}
			return false; 
		});
	}
	beny_tm_contact_form();

	// -----------------------------------------------------
	// --------------------    OWL CAROUSEL    -------------
	// -----------------------------------------------------

	function beny_tm_owl_carousel(){

		var carusel2			= jQuery('.beny_tm_testimonial_wrap .owl-carousel');
		carusel2.owlCarousel({
			loop:true,
			autoplay:false,
			autoWidth: false,
			nav: false,
			items:1,
		});
	}
	beny_tm_owl_carousel();

	// -----------------------------------------------------
	// --------------------    WOW JS    -------------------
	// -----------------------------------------------------

	 new WOW().init();

	// -----------------------------------------------------
	// ---------------    HERO TEXT ANIMATION  --------------
	// -----------------------------------------------------

	function beny_tm_text_animation(){

		var H        			= jQuery(window).height();
		var titleHolder			= jQuery('.beny_tm_hero_title');
		var titleHolder2		= jQuery('.beny_tm_hero_title_second');
		var titleHeight			= titleHolder.outerHeight();
		var titleHeight2		= titleHolder2.outerHeight();
		var headerHeight		= jQuery('.beny_tm_header').outerHeight();

		var	height				= H/2 + titleHeight/2 - headerHeight;
		var	height2				= H/2 + titleHeight2/2 - headerHeight;

		jQuery(window).on('scroll',function(){
			var window_offset = jQuery(window).scrollTop();
			titleHolder.css({opacity:1 - (window_offset/height), marginTop:(window_offset/height)*200});
			titleHolder2.css({opacity:1 - (window_offset/height2), marginTop:(window_offset/height2)*200});
		});
	}
	beny_tm_text_animation();

	// -----------------------------------------------------
	// -----------------    PROGRESS BAR    ----------------
	// -----------------------------------------------------

	function tdProgress(container){

		container.find('.beny_tm_progress').each(function(i) {
			var progress 		= jQuery(this);
			var pValue 			= parseInt(progress.data('value'), 10);
			var pColor			= progress.data('color');
			var pBarWrap 		= progress.find('.beny_tm_bar_wrap');
			var pBar 			= progress.find('.beny_tm_bar');
			pBar.css({width:pValue+'%', backgroundColor:pColor});
			setTimeout(function(){pBarWrap.addClass('open');},(i*500));
		});
	}
	jQuery('.beny_tm_progress_wrap').each(function() {
		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});

	// -----------------------------------------------------
	// -------------------    COUNTER    -------------------
	// -----------------------------------------------------

	jQuery('.beny_tm_counter').each(function() {

		var el		= jQuery(this);
		el.waypoint({
			handler: function(){

				if(!el.hasClass('stop')){
					el.addClass('stop').countTo({
						refreshInterval: 50,
						formatter: function (value, options) {
							return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
						},	
					});
				}
			},offset:'80%'	
		});
	});

	// -----------------------------------------------------
	// -------------------    POPUP BLOG    ----------------
	// -----------------------------------------------------

	function beny_tm_popup_blog(){
		var li				= jQuery('.beny_tm_list_wrap.blog_list .inner_list');
		var popupBox		= jQuery('#beny_tm_popup_blog');
		var popupInner		= popupBox.find('.inner_popup');
		var closePopup		= popupBox.find('.close');

		li.each(function(){
			var element		= jQuery(this);
			var button		= element.find('.read_more a,.title_holder a,.link_news');
			var html		= element.html();
			var mainImage	= element.find('.news_image');
			var imgData		= mainImage.data('url');
			var title		= element.find('.title_holder h3');
			var titleHref	= element.find('.title_holder h3 a').html();

			mainImage.css({backgroundImage: 'url('+imgData+')'});
			button.on('click',function(){
				popupBox.addClass('opened');
				popupInner.html(html);
				mainImage = popupInner.find('.news_image');
				mainImage.css({backgroundImage: 'url('+imgData+')'});
				title = popupInner.find('.title_holder h3');
				title.html(titleHref);
				return false;
			});
		});
		closePopup.on('click',function(){
			popupBox.removeClass('opened');
			popupInner.html('');
			return false;
		});
	}
	beny_tm_popup_blog();

	// -----------------------------------------------------
	// -------------    WIDGET MENU SCROLL -----------------
	// -----------------------------------------------------

	function beny_tm_popupscroll(){

		var H				= jQuery(window).height();
		var scrollable		= jQuery('.scrollable');

		var popupBox		= jQuery('.beny_tm_popup_blog .inner_popup');

		popupBox.css({height:H-100});

		scrollable.each(function(){
			var element		= jQuery(this);
			var wH			= jQuery(window).height();

			element.css({height: wH-100});

			element.niceScroll({
				touchbehavior:false,
				cursorwidth:0,
				autohidemode:true,
				cursorborder:"0px solid #fff"
			});
		});
	}
	beny_tm_popupscroll();

	// -----------------------------------------------------
	// -----------------    MINI BOXES    ------------------
	// -----------------------------------------------------

	 function beny_tm_miniboxes(){

	  var el 			= jQuery('.beny_tm_miniboxes');

	  if(el.length){
	   el.each(function(index, element) {

		var child		= jQuery(element).find('.beny_tm_minibox');

		child.css({height:'auto'});
		// Get an array of all element heights

		var W 		= jQuery(window).width();
		if(W > 480){
		 var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();

		 // Math.max takes a variable number of arguments
		 // `apply` is equivalent to passing each height as an argument
		 var maxHeight 		= Math.max.apply(null, elementHeights);

		 // Set each height to the max height
		 child.css({height:maxHeight+'px'}); 
		}
	   });  
	  }
	 }
	beny_tm_miniboxes();

	// -------------------------------------------------
	// -------------   PORTFOLIO -----------------------
	// -------------------------------------------------

	function beny_tm_portfolios(){

		var WW					= jQuery(window).width();
		var portfolioWidth		= jQuery('.beny_tm_portfolio_home_wrap').width();
		var item				= jQuery('.beny_tm_portfolio_home_wrap .item');
		var itemTall			= jQuery('.beny_tm_portfolio_home_wrap .item.tall');
		var itemWide			= jQuery('.beny_tm_portfolio_home_wrap .item.wide');
		var mTall				= jQuery('.beny_tm_portfolio_home_wrap .item.m_tall');
		var mSimple				= jQuery('.beny_tm_portfolio_home_wrap .item.m_simple');
		var mWide				= jQuery('.beny_tm_portfolio_home_wrap .item.m_wide');
		var col3				= Math.floor(portfolioWidth/3);
		var col2				= Math.floor(portfolioWidth/2);
		var col1				= Math.floor(portfolioWidth);

		if(WW>768){
			// laptop
			item.css({
				width:col3-30+'px',
				height:Math.floor(col3*0.65)+'px',
				margin:15+'px'
			});
			itemTall.css({height:Math.floor(col3*1.3)+30+'px'});
			itemWide.css({
				width:Math.floor(col3*2)-30+'px',
				height:Math.floor(col3*1.3)+30+'px',
			});
		}else if(WW<=768 && WW > 480){
			// ipad
			item.css({
				width:col2-30+'px',
				height:Math.floor(col2*0.65)+'px',
				margin:15+'px'
			});
			itemTall.css({height:Math.floor(col2*1.3)+30+'px'});
			itemWide.css({
				width:Math.floor(col2*2)-30+'px',
				height:Math.floor(col2*1.3)+30+'px',
			});
			mTall.css({
				width:col2-30+'px ',
				height:Math.floor(col2*1.3)+30+'px',
				margin:15+'px'
			});
			mSimple.css({
				width:col2-30+'px',
				height:Math.floor(col2*0.65)+'px',
				margin:15+'px'
			});
			mWide.css({
				width:col1-30+'px',
				height:Math.floor(col2*1.3)+'px',
				margin:15+'px'
			});
		}else{
			// mobile
			item.css({
				width:col1-20+'px',
				height:Math.floor(col1*0.65)+'px',
				margin:10+'px'
			});
		}
	}
	beny_tm_portfolios();

	// filterable 

	function beny_tm_portfolioo(){

		if(jQuery().isotope) {

			// Needed variables
			var list 		 = jQuery('.beny_tm_portfolio_list');
			var filter		 = jQuery('.beny_tm_portfolio_filter');

			if(filter.length){
				// Isotope Filter 
				filter.find('a').on('click', function(){
					var selector = jQuery(this).attr('data-filter');
					list.isotope({ 
						filter				: selector,
						animationOptions	: {
							duration			: 750,
							easing				: 'linear',
							queue				: false
						}
					});
					return false;
				});	

				// Change active element class
				filter.find('a').on('click', function() {
					filter.find('a').removeClass('current');
					jQuery(this).addClass('current');
					return false;
				});	
			}
		}
	}
	beny_tm_portfolioo();

	function beny_tm_projectss() {

		jQuery('.beny_tm_portfolio_animation_wrap').each(function() {
			jQuery(this).on('mouseenter', function() {
				if (jQuery(this).data('title')) {
					jQuery('.beny_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
					jQuery('.beny_tm_portfolio_titles').addClass('visible');
				}

				jQuery(document).on('mousemove', function(e) {
					jQuery('.beny_tm_portfolio_titles').css({
						left: e.clientX - 10,
						top: e.clientY + 25
					});
				});
			}).on('mouseleave', function() {
				jQuery('.beny_tm_portfolio_titles').removeClass('visible');
			});
		});
	}
	beny_tm_projectss();

	// -----------------------------------------------------
	// --------------    ISOTOPE MASONRY    ----------------
	// -----------------------------------------------------

	function beny_tm_isotope(){

		jQuery('.masonry').isotope({
			itemSelector: '.masonry_item',
			masonry: {

			}
		});
	}
	beny_tm_isotope();

	// -----------------------------------------------------
	// --------------------    TOTOP    --------------------
	// -----------------------------------------------------

	function beny_tm_totop(){

		jQuery(".beny_tm_totop").on('click', function(e) {
			e.preventDefault();		
			jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
			return false;
		});
	}
	beny_tm_totop();

	function beny_tm_totop_myhide(){

		var toTop		=jQuery(".beny_tm_totop");
		if(toTop.length){
			var topOffSet 	=toTop.offset().top;

			if(topOffSet > 1000){
				toTop.addClass('opened');	
			}else{
				toTop.removeClass('opened');
			}
		}
	}
	beny_tm_totop_myhide();
	
	// -------------------------------------------------
	// -------------   ANIMATE TEXT  -------------------
	// -------------------------------------------------

	function beny_tm_animate_text(){

		var animateSpan			= jQuery('.beny_tm_animation_text_word');

			animateSpan.typed({
				strings: ["Beny Kennedy", "Web Developer"],
				loop: true,
				startDelay: 1e3,
				backDelay: 2e3
			});
	}
	beny_tm_animate_text();

		jQuery(window).on('scroll',function(){
			//e.preventDefault();
			beny_tm_nav_bg_scroll();
			beny_tm_totop_myhide();
		});

		jQuery(window).on('resize',function(){
			beny_tm_popupscroll();
			beny_tm_miniboxes();
			beny_tm_portfolios();
			beny_tm_isotope();
		});

		jQuery(window).load('body', function(){
			setTimeout(function(){
			jQuery('.beny_tm_preloader').addClass('loaded');
		}, 1000);
		});
	
});