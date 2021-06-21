$('.page-scroll').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);
	
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 59
	}, 1000, 'easeInOutExpo');

	e.preventDefault();

});

//Parallax
//About
$(window).on('load', function(){
	$('.paragrafKiri').addClass('pBegin');
	$('.paragrafKanan').addClass('pBegin');
});

$(window).scroll(function(){
	var wScrool = $(this).scrollTop();
	
	//Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px,' + wScrool/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,' + wScrool/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,' + wScrool/1.2 +'%)'
	});

	//Portfolio
	if( wScrool > $('.portfolio').offset().top - 200 ){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('begin');
			}, 300 * (i + 1) );
		});
	}
});