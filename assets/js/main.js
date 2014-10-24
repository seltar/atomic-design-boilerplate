require(["config"], function() {
	require(["jquery"], function($) {

		$(function(){

			/**
			 * Scroll functionality
			 */
			function updateElements(){

				/**
				 * Header
				 */
				// > the distance we've scrolled from the top
				var distanceY = $(window).scrollTop(),
					// > start shrinking X px from the top
					shrinkOn = 50,
					// > target
					header = $("header");

				if (distanceY > shrinkOn) {
					header.addClass("smaller");
				} else {
					if (header.hasClass("smaller")) {
						header.removeClass("smaller");
					}
				}

				/**
				 * Elements
				 */
				$('.block-hidden').each( function(i){

					var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
					var bottom_of_window = $(window).scrollTop() + $(window).height();

					// if the object is halfway visible, remove the hidden class allowing it to transition in
					if( bottom_of_window > bottom_of_object ){
						$(this).removeClass("block-hidden");
					}

				}); 

			}
			updateElements();

			$(window).on("scroll", function(e){
				updateElements();
			});


			/**
			 * Menu Hover functionality
			 */
			var marker = $("header .menu-marker"),
				menuAnimTimer = null;
			$("header .menu li").hover(function(){
				// > kill the timer
				clearTimeout(menuAnimTimer);

				// > get the link position
				var left = $(this).offset().left,
					width = $(this).outerWidth();

				// > translate the marker to that position, letting it transition with css
				marker.css({ left: left, width: width });
			}, function(){
				// > set a timer to hide the marker
				menuAnimTimer = setTimeout(function(){
					marker.css("width", 0);
				}, 1000);
			});



			/**
			 * Menu Dropdown functionality
			 */
			
			$("header .menu > li > a").on('click',function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				$("header .menu > li > a").removeClass("active");
				if(!$(this).next(".dropdown").children().length){
					return;
				}
				if(!$(this).hasClass("active")){
					$(this).addClass("active");
				}
			});
			$(document).on("click", function(e){
				e.preventDefault();
				$("header .menu > li > a").removeClass("active");
			});
		});
	});
});