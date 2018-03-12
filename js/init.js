/*
	Miniport by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'css/style.css' },
			'desktop':	{ range: '600-', href: 'css/style-desktop.css', containers: 1200, grid: { gutters: 25 } },
			'mobile':	{ range: '-600', href: 'css/style-mobile.css', containers: '100%', grid: { collapse: true, gutters: 10 }, viewport: { scalable: false } }
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});



		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly.
			$window.load(function() {

			    var x = parseInt($('.wrapper').first().css('padding-top')) - 15;
			    $('#nav a, .scrolly').scrolly(1000, x);
			    $('#nav2 a, .scrolly').scrolly(1000, x);

			});

	});

})(jQuery);
