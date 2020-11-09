$(document).ready(function(){
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	})


	$('.menu ul li a').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},500)

		return false;
	})

})

$(window).scroll(function(){
	var value=$(this).scrollTop()

	if(value>200){
		$('.header-area').addClass('FixedHeader')
	}else{
		$('.header-area').removeClass('FixedHeader')
	}
})