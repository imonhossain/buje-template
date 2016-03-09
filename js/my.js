$(document).ready(function(){
	 $(".navbar-nav li a").click(function(){
		  $(".navbar-nav li a").removeClass("active");
		  $(this).addClass("active");
	   });  
	  
	   $(".portfolio_filter ul li").hover(function(){
		$(this).css({"border-color":"#ff6868"});
		},
		function(){
			$(this).css({"border-color":"#fff"});
		});
		
		$(".navbar-nav li").hover(function(){
		$(this).find('.nav-overly').slideDown();
		},
		function(){
			$(this).find('.nav-overly').slideUp();
		});

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
		.animate({scrollTop: targetOffset}, 1000);
	   return false;
	  }
	}
  });
  

	$('.image-overly').css({'opacity':'0.0'})
   $(".portfolio_contents ul li").hover(function(){

	$(this).find('.image-overly').animate({"opacity":"1.0"});
	},
	function(){
		$(this).find('.image-overly').animate({"opacity":"0.0",});
	});
	$("a[data-gal^='prettyPhoto'").prettyPhoto({hook: 'data-gal'});
	
	$('.img-hover').hide();
	 $(".single-market a").hover(function(){
	$(this).find('.img-sitll').hide();
	$(this).find('.img-hover').show();
	},
	function(){
	$(this).find('.img-sitll').show();
	$(this).find('.img-hover').hide();
	});
		
	
}); 