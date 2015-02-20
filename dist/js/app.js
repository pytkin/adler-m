$(function () {
	'use strict';

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

	$('.flexslider').flexslider({
		prevText: '',
		nextText: ''
	});
});
