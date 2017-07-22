	$(document).ready(function() {
		$menuLeft = $('.pushmenu-left');
		$nav_list = $('#nav_list');
		
		$nav_list.click(function(e) {
    	e.stopPropagation();
			$(this).toggleClass('active');
			$('.pushmenu-push').toggleClass('pushmenu-push-toright');
			$menuLeft.toggleClass('pushmenu-open');
		});
		$('html').click(function() {
			$nav_list.removeClass('active');
			$('.pushmenu-push').removeClass('pushmenu-push-toright');
			$menuLeft.removeClass('pushmenu-open');
		});
	});