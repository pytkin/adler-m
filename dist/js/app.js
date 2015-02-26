$(function () {
	'use strict';

	var $carSound = $('#car-sound');

	// Header menu
	$('#show-catalog-menu').on('click', function (e) {
		e.preventDefault();
		$('.site-header').toggleClass('display-catalog-menu');
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() === 0) {
			$('.site-header').removeClass('display-catalog-menu');
		}
	});

	$('#show-catalog-menu-modile').on('click', function (e) {
		e.preventDefault();
		$('.site-header').toggleClass('display-catalog-menu-mobile');
	});

	// Main page, promo slider
	$('.promo-slider').flexslider({
		prevText: '',
		nextText: ''
	});


	// Main page, brand slider
	$('.brands-slider').iosSlider({
      snapToChildren: true,
      desktopClickDrag: true,
      infiniteSlider: true,
      navNextSelector: $('.slider-button.next'),
      navPrevSelector: $('.slider-button.prev')
    });

	// Main page, extended about
	$('#about-extended-info').on('shown.bs.collapse', function () {
		$(this).next('.show-more-link').text('Скрыть подробное описание');
	}).on('hidden.bs.collapse', function () {
		$(this).next('.show-more-link').text('Узнать больше');
	});

	// Footer car
	$('#footer-car').on('click', function () {
        var $car = $(this);
        // var pathLength = $(window).width();

        $carSound[0].play();
        setTimeout(function () {
            $car.addClass('starts');
            setTimeout(function () {
                $car.removeClass('starts');
            }, 29000);
        }, 1660);
    });

	// Packery
	// $('.catalog-list').packery({
	// 	itemSelector: 'li',
	// 	gutter: 0,
	// 	rowHeight: 'li:not(.first-item)'
	// });

});