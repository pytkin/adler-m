$(function () {
	'use strict';

	var substibtionIndex = 1;
	var _ = window._;

	if ($('html').hasClass('touch')) {
		$('.catalog-index-list, .catalog-list').on('click touchend', 'a', function () {
			var el = $(this);
			var link = el.attr('href');
			window.location = link;
		});
	}

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
	$('.catalog-index-list, .catalog-list').on('mouseenter', 'li, .item', function () {
		$(this).find('.gallery-slider').iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			infiniteSlider: true,
			navNextSelector: $('.gallery-button.next'),
			navPrevSelector: $('.gallery-button.prev')
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

        $car.addClass('starts');
        setTimeout(function () {
            $car.removeClass('starts');
        }, 29000);
    });

	// Custom selects
	$('select').select2();

	$('#filter-reset').on('click', function () {
        $(this).closest('form').find('select').val('').trigger('change');
    });


	// Modals
	$(document).on('click', '[data-toggle="modals"]', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var link = $(this);
		var modal = $('#modal');

		if (modal.hasClass('in')) {
			modal.modal('hide');

			setTimeout(function () {
				modal.find('.modal-content').load(link.attr('href'), function () {
					modal.modal('show');
				});
			}, 600);
		} else {
			modal.find('.modal-content').load(link.attr('href'), function () {
				modal.modal('show');
			});
		}
	});

	// Faq questions
	$('.faq-block').on('click', '.question', function () {
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
	}).on('click', '.favorites', function (e) {
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

		var row = _.template($('#params-row-template').html());
		var template = row({ index: ++substibtionIndex });

		$(this).closest('form').find('fieldset:last').after(template);
		$(this).closest('form').find('select').select2();

	}).on('click', '.remove-fields-btn', function (e) {
		e.preventDefault();
		$(this).closest('fieldset').remove();
	});


	// Init tooltips
	$('[data-toggle="tooltip"]').tooltip();


	// Cart discount info
	$('.discounts-info-trigger').on('click', function (e) {
		e.preventDefault();
		var $content = $(this).siblings('.discounts-info');
		var animationDuration = 600;

		if ($content.hasClass('show')) {
			$content.stop().slideUp(animationDuration);
			$content.removeClass('show');
		} else {
			$content.stop().slideDown(animationDuration);
			$content.addClass('show');
		}
	});


	// Catalog index results preloading
	$('.js-fetch-trigger').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var url = $this.attr('href');
		var curPaneList = $(this).closest('.tab-pane.active').find('.catalog-index-list');

		$this.closest('.content-actions').addClass('fade');

		$.ajax(url, {
			dataType: 'html'
		}).done(function (data) {
			$(curPaneList).append(data);
			$this.closest('.content-actions').removeClass('fade');
		});
	});


	// Catalog card gallery

	var PhotoSwipe = window.PhotoSwipe;
	var PhotoSwipeUI_Default = window.PhotoSwipeUI_Default;
	var CC_gallery_items = window.CC_gallery_items;
	var pswpElement = document.querySelectorAll('.pswp')[0];
	var gallery = {};
	var options = {
		index: 0,
		shareEl: false,
		captionEl: false
	};
	var $itemGallery = $('#item-gallery');

	$itemGallery.iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		infiniteSlider: true,
		navNextSelector: $('.slider-button.next'),
		navPrevSelector: $('.slider-button.prev')
	});

	$('.card-view').on('click', '[data-slide-id]', function (e) {
		e.preventDefault();

		options.index = $(this).data('slide-id');

		gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, CC_gallery_items, options);
		gallery.init();
	});

});
