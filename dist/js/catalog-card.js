$(function () {
	'use strict';

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

		console.log(pswpElement, PhotoSwipeUI_Default, CC_gallery_items, options, PhotoSwipe);

		gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, CC_gallery_items, options);
		gallery.init();
	});
});
