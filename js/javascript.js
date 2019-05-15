$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();

		if(scroll>50){
			$("#navbar").css("background", "rgba(0, 0, 0, 0.6)" );
			$("#navbars").css("background", "white" );
		
		}else{
			$("#navbar").css("background", "transparent");
			$("#navlink").css("color", "lightseagreen" );

		}
	})
})


$(document).ready(function(){

	$(' .slide-scroll').click(function(e){
	  let scrollHref = $(this).attr('href');
	
	  $('html, body').animate({
		  scrollTop: $(scrollHref).offset().top
	  }, 1000)
	
	})
	});
	
	