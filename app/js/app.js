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
		$('.site-header').removeClass('display-search-form').toggleClass('display-catalog-menu-mobile');
	});

	$('#show-search-form').on('click', function (e) {
		e.preventDefault();
		$('.site-header').removeClass('display-catalog-menu-mobile').toggleClass('display-search-form');
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

	// Init sliders for catalog-index/catalog-list on main page
	$('.catalog-index-list, .catalog-list').one('mouseenter', 'li, .item', function () {
		$(this).find('.gallery-slider').iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			infiniteSlider: true,
			navNextSelector: $('.slider-button.next'),
			navPrevSelector: $('.slider-button.prev')
		});
	});

	// Change main image for items (catalog-index/catalog-list)
	$('.catalog-index-list, .catalog-list').on('mouseenter', '.slide img', function () {
		var newSrc = $(this).data('hover-image');
		$(this).closest('li, .item').find('.image-holder img').attr('src', newSrc);
	}).on('mouseleave', 'li, .item', function () {
		var newSrc = $(this).find('.image-holder img').data('original-image');
		$(this).find('.image-holder img').attr('src', newSrc);
	});

	// Main page, extended about
	$('#about-extended-info').on('shown.bs.collapse', function () {
		$(this).next('.show-more-link').text('Скрыть подробное описание');
	}).on('hidden.bs.collapse', function () {
		$(this).next('.show-more-link').text('Узнать больше');
	});

	// Catalog card, extended similar models
	$('#similar-models-extended').on('shown.bs.collapse', function () {
		$(this).next('.show-more-link').addClass('hidden');
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

	$('#filter-reset').on('click', function () {
        $(this).closest('form').find('select').val('').trigger('change');
    });

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


	// Modals
	$(document).on('click', '.open-modal', function (e) {
		e.preventDefault();
		$.fancybox({
            href: $(this).attr('href'),
            padding: 20,
			margin: 10,
            wrapCSS: 'fancybox-form',
            fitToView: false,
            type: 'ajax',
            helpers: {
                overlay: {
                    css: {
                        background: 'rgba(0,0,0,.21)'
                    },
                    locked: false
                }
            }
        });
	});


	// Endless pagenation
	if ($('.endless-container').length) {
		$.endlessPaginate();
	}


	// Card actions
	$('.card-actions').on('click', '.collection', function (e) {
		e.preventDefault();
		$(this).toggleClass('added');
		if ($(this).text() === 'Добавить в коллекцию') {
			$(this).html('Добавлено<br> в коллекцию');
		} else {
			$(this).html('Добавить<br> в коллекцию');
		}
	});
	$('.card-actions').on('click', '.favorites', function (e) {
		e.preventDefault();
		$(this).toggleClass('added');
		if ($(this).text() === 'В отложенные товары') {
			$(this).html('В отложенных<br> товарах');
		} else {
			$(this).html('В отложенные<br> товары');
		}
	});


	// Order. select/deselect all checkboxes
	$('#orders-select-all').on('click', function (e) {
		e.preventDefault();
		$('.archive-table input:checkbox').attr('checked', true).prop('checked', true);
	});
	$('#orders-cancel-all').on('click', function (e) {
		e.preventDefault();
		$('.archive-table input:checkbox').prop('checked', false).removeAttr('checked');
	});


	// Booking and Preorder. select/deselect all checkboxes
	$('#booking-select-all, #preorder-select-all').on('click', function (e) {
		e.preventDefault();
		$(this).closest('form').find('.cart-table input:checkbox').attr('checked', true).prop('checked', true);
	});
	$('#booking-cancel-all, #preorder-cancel-all').on('click', function (e) {
		e.preventDefault();
		$(this).closest('form').find('.cart-table input:checkbox').prop('checked', false).removeAttr('checked');
	});


	// Favorites
	$('.favorites-block #select-all-items').on('click', function (e) {
		e.preventDefault();
		if ($(this).text() === 'Выбрать все') {
			$(this).text('Отменить все');
			$('.cart-table input:checkbox').attr('checked', true).prop('checked', true);
		} else {
			$(this).text('Выбрать все');
			$('.cart-table input:checkbox').prop('checked', false).removeAttr('checked');
		}
	});


	// Add/remove fields for personal-my-subscriptions
	$('.subscriptions-block').on('click', '#add-fields', function (e) {
		e.preventDefault();

		$(this).closest('form').find('fieldset:last').clone().insertAfter($(this).closest('form').find('fieldset:last')).prepend('<button class="remove-fields-btn"></button>');
	}).on('click', '.remove-fields-btn', function (e) {
		e.preventDefault();
		$(this).closest('fieldset').remove();
	});


	// Init tooltips
	$('[data-toggle="tooltip"]').tooltip();


	// Catalog card galleryes

	var $itemGallery = $('#item-gallery');
	var $mainPhoto = $('#main-photo');
	var after = function (ms, cb) {
		return setTimeout(cb, ms);
    };
	var currentPhotoIndex = 0;
	var photoUrls = $itemGallery.find('.slide').map(function () {
		return $(this).attr('href');
    }).get();

    $itemGallery.iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		navNextSelector: $('.slider-button.next'),
		navPrevSelector: $('.slider-button.prev')
    }).on('click', '.slide', function (e) {
		var $newImage;
		var $oldImage = $mainPhoto.children('img');
		var photoUrl = $(this).attr('href');
		e.preventDefault();
		currentPhotoIndex = parseInt($(this).data('index'));
		$oldImage.addClass('old');
		after(1000, function () {
			$oldImage.remove();
		});
		$newImage = $('<img src="' + photoUrl + '">').load(function () {
			$(this).addClass('new').prependTo($mainPhoto);
			after(1, function () {
				$newImage.removeClass('new');
			});
		});
    });
    $(window).resize(function () {
      $('#item-gallery').iosSlider('update');
    });
    $mainPhoto.on('click', 'img', function () {
		$.fancybox.open(photoUrls, {
		index: currentPhotoIndex,
		helpers: {
			overlay: {
				locked: false
			}
		}});
    });

});
