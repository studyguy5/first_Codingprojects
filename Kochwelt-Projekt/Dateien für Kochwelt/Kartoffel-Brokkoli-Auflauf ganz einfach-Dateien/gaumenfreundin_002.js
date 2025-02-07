$(document).ready(function () {


	/** SCROLL CLASS **/

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if (scroll >= 200) {
	        $("body").addClass("scrolled-down");
	    }else{
	    	$("body").removeClass("scrolled-down");
	    }
	}); 

	/** FAVORITES **/

	$(".simplefavorite-button").each(function(){
 		if( $(this).hasClass("active") ){
			$(this).next(".gf-tooltip").text("Bereits auf der Merkliste");
		}else{
			$(this).next(".gf-tooltip").text("Auf die Merkliste");
		}
 	});

	$(document).on('favorites-updated-single', function(event, favorites, post_id, site_id, status){
	 	$(".simplefavorite-button").each(function(){
	 		if( $(this).hasClass("active") ){
				$(this).next(".gf-tooltip").text("Bereits auf der Merkliste");
			}else{
				$(this).next(".gf-tooltip").text("Auf die Merkliste");
			}
	 	});
	});


	/** FAQ **/

	$('body').on('click', '.gf-faq-item-question', function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
	});


	/** FILTER **/

	$('body').on('click', '.delete-filter', function(e){
	    e.preventDefault();
		$(".gf-filter-item-values-entry:not(.first-entry)").removeClass("active");
		updateFilterCount();
		addToUrl();
		updateQuery();
	});

	$(".gf-filter-item-label").click(function(e){
		if($(this).parent().hasClass("active")){
			$(".gf-filter-item").removeClass("active");
		}else{
			$(".gf-filter-item").removeClass("active");
			$(this).parent().addClass("active");
		}
	});

	$(".gf-filter-item-values-entry").click(function(e){
		$(this).toggleClass("active");
		updateFilterCount();
		addToUrl();
		updateQuery();
	});

	function updateFilterCount(){
		$(".gf-filter-item").each(function(){
			var count = $(this).find(".gf-filter-item-values-entry.active").length;
			if(count > 0){
				$(this).find(".gf-filter-item-label span").text(count);
			}else{
				$(this).find(".gf-filter-item-label span").text("");
			}
		});
	}

	function addToUrl(){
		var url = location.protocol + '//' + location.host + location.pathname;


			$(".gf-filter-item-values-entry.active").each(function(){

				var filter = $(this).attr("gf-filter");

				if(url.indexOf("?") >= 0) {
			        url = url+"&filter="+filter;
			    }else{
			        url = url+"?filter="+filter;
			    }
			});
			
		    url = url.replace('&&','&');
		    url = url.replace('?&','?');

		   

	    if(url[url.length -1]=="&"){url.slice(0,-1);}

	    window.history.pushState("state", "title", url);
	}

	function getParamArray(url) {
	  var queryString = url.substring(url.lastIndexOf("?") + 1);

	  if(queryString.indexOf(",") >= 0){
			queryString = queryString.replace(",","&filter=");
		}

	  return queryString.split('&').map(function(sParam) {
	    var param = sParam.split('=');
	    var value = decodeURIComponent(param[1]);

	    var filterval = value.split("-");

	    return {
	      name: filterval[0],
	      value: decodeURIComponent(filterval[1])
	    };
	  });
	}

	function getParamArrayRaw(url) {
	  var queryString = url.substring(url.lastIndexOf("?") + 1);

	  return queryString.split('&').map(function(sParam) {
	     var param = sParam.split('=');

	    return {
	      name: param[0],
  		value: decodeURIComponent(param[1])
	    };
	  });
	}

	function updateQuery(){

		var filter= getParamArray(window.location.href);

		$(".pagination-links").hide();

		console.log(filter);

		$('#gf-posts').html("<img src='https://www.gaumenfreundin.de/wp-content/themes/gaumenfreundin/img/spinner.gif' class='gf-spinner'/>");

		$.ajax({
		    type: 'POST',
		    url: 'https://www.gaumenfreundin.de/wp-admin/admin-ajax.php',
		    dataType: 'html',
		    data: {
		      action: 'filter_posts',
		      filter: filter
		    },
		    success: function(res) {
		    		    	
		      	$('#gf-posts').html(res);

		      	$grid.masonry( 'appended', $(".fav-recipe-card") );
		      	$grid.masonry("layout");

		    },
		     error: function (request, status, error) {
		        alert(request.responseText);
		    }
		  });

		
	}


	function initFilterOnPageLoad(){
		var filter = getParamArrayRaw(window.location.href);

		$.each(filter, function(){
			console.log($(this)[0]['value']);
			$(".gf-filter-item-values-entry[gf-filter='"+$(this)[0]['value'] +"']").addClass("active");
		});

		updateFilterCount();

		if($(".gf-filter-item-values-entry.active").length > 1){
			updateQuery();
		}

	}

	initFilterOnPageLoad();




	/** MASONRY **/

		var $grid = $('.masonry-grid').masonry({
		  itemSelector: '.fav-recipe-card',
		  percentPosition: true,
			columnWidth: '.fav-recipe-card',
			itemSelector: '.fav-recipe-card'
		});


		setTimeout(function(){
			$grid.masonry("layout");
		},1000);


		$('.animate-number').each(function () {
		  var $this = $(this);
		  jQuery({ Counter: 0 }).animate({ Counter: $this.attr("number")}, {
		    duration: 3000,
		    easing: 'swing',
		    step: function () {
		    if($this.attr("number") % 1 == 0){
		      $this.text(Math.ceil(this.Counter));
		     }else{
		      $this.text(this.Counter.toFixed(1).toString().replace(".",","));
		  }
		    }
		  });
		});


	$(".open-recipe-menu,.gf-recipe-menu").mouseenter(function () {
		if ($(window).width() > 992) {
			$(".gf-recipe-menu").addClass("open");
		}
	}).mouseleave(function () {
		if ($(window).width() > 992) {
			$(".gf-recipe-menu").removeClass("open");
		}
	});

	$(".open-recipe-menu").click(function (e) {
		if ($(window).width() <= 992) {
			e.preventDefault();
			$(".gf-recipe-menu").addClass("open");
		}
	});

	$(".mobile-back-to").click(function () {
		$(".gf-recipe-menu").removeClass("open");
	});

	$(".mobile-menu-actn").click(function (e) {
		$("body").removeClass("open-search");
		if( $("header").hasClass("open") ){
			$("header").removeClass("open");
			$(".gf-recipe-menu").removeClass("open");
		}else{
			$("header").addClass("open");
		}
	});


	$(".gf-mobile-menu ul ul").each(function () {
		$(this).prepend('<div class="mobile-back-to"><i class="fa fa-chevron-left"></i> Zurück zum Menü</div>');
	});

	$(".gf-mobile-menu li.menu-item-has-children > a").click(function (e) {
		e.preventDefault();
		$(this).parent().children("ul").addClass("open");
	});

	$(".gf-mobile-menu li.menu-item-has-children .mobile-back-to").click(function (e) {
		e.preventDefault();
		$(this).parent().removeClass("open");
	});


	/** SMOOTH SCROLL **/

	$(document).on('click', 'a[scroll="true"][href^="#"]', function (event) {
	    event.preventDefault();

	    if($(window).width() > 770){
	    	$('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top-100
		    }, 1000);
	    }else{
			$('html, body').animate({
		        scrollTop: $($.attr(this, 'href')).offset().top-100
		    }, 1000);
	    }
	});

	$(".teaser-slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		dots: false,
		speed: 950,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
		autoplay: false,
	});
		

	// Recipe Slider Script
	$(".recipe-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: true,
		infinite: true,
		dots: true,
		speed: 950,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
		autoplaySpeed: 5000,
		autoplay: true,
		prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
				}
			},
		]
	});

	// Blog Slider Script
	$(".blog-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		dots: true,
		speed: 950,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
		autoplaySpeed: 5000,
		autoplay: true,
		prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2, 
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	// Blog Slider Script
	$(".recipe-card-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		dots: false,
		speed: 950,
		cssEase: "cubic-bezier(0.7, 0, 0.3, 1)", 
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

})



$('.rating i').click(function () {
	$(this).addClass('active');
	$(this).prevAll().addClass('active');
	$(this).nextAll().removeClass('active');
});


$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$(".scrollup").fadeIn();
		$("#gf-sky").addClass("show");
	} else {
		$(".scrollup").fadeOut();
		$("#gf-sky").removeClass("show");
	}
})

$(".scrollup").click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
}) 