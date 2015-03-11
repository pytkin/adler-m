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
	$('.brands-slider, #item-gallery[data-gallery-init="true"]').iosSlider({
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

	// Custom selects
	$('select').select2();

	// Faq questions
	$('.question').on('click', function () {
		var $answer = $(this).siblings('.answer');
		var $answerContent = $answer.children('.answer-content');
		var animationDuration = 600;

		if ($answerContent.hasClass('display')) {
			$answer.stop().slideUp(animationDuration);
			$answerContent.removeClass('display');
		} else {
			$answer.stop().slideDown(animationDuration);
			$answerContent.addClass('display');
		}
	});

	// Partners - select city
	$('#select-city').on('change', function () {
      var cID = $(this).val();
      $('.partners-list').removeClass('selected').filter('[data-city="' + cID + '"]').addClass('selected');
    });


	// Персональные данные
	$('.personal-data-list').on('click', '.change-value', function (e) {
		var $this = $(this);
		e.preventDefault();
		$this.closest('li').find('.item-edit').show().find('.form-control').focus();
		$this.hide().closest('li').find('.item-value').hide();
	});


	// How2Buy
	if ($('.how2buy-block').length) {
		$('#country-select').on('change', function () {
			var countryID = $(this).val();
			$('.city-select').removeClass('selected').filter('[data-country=' + countryID + ']').addClass('selected');
		});
		$('#city-select').on('change', function () {
			var cityID = $(this).val();
			$('.delivery-variant').removeClass('selected').filter('[data-city=' + cityID + ']').addClass('selected');
		});
	}

	// My orders
	$('.order-listing-toggle').on('click', function () {
		$(this).toggleClass('active');
	});

});
