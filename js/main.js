$(document).ready(function(){
	$("#portfolio_filter_action").mixitup({
		effects: ['fade','rotateZ'],
		easing: 'snap'
	});
	
	
// # link animate
  $('a[href*=#]').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	&& location.hostname == this.hostname) {
	  var $target = $(this.hash);
	  $target = $target.length && $target
	  || $('[name=' + this.hash.slice(1) +']');
	  if ($target.length) {
		var targetOffset = $target.offset().top;
		$('html,body')
		.animate({scrollTop: targetOffset}, 3000);
	   return false;
	  }
	}
  });
  
  // stcky nav menu

	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });
		} else {
			$('#sticky_navigation').css({ }); 
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
});



