/*
	Creates animation for the skills bars. The number at the end
	represents the miliseconds to complete the animation.
*/
(function( $ ){
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
});
})(jQuery);