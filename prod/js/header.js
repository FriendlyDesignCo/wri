$(document).ready(function(){ 
	$(".nav-list a").click(function(){
		$("input#showblock").prop('checked', false);
		$(".body-container").removeClass("menu-active");
		$(".menu-title").removeClass("menu-active");
		$(".hamburger").removeClass("active");
	});

	$("header label").click(function() {
		$(".body-container").toggleClass("menu-active");
		$(".menu-title").toggleClass("menu-active");
		$(".hamburger").toggleClass("active");
	})

	var winHeight = $(window).height(), 
      	docHeight = $(document).height(),
      	progressBar = $('progress'),
      	max, value;

	/* Set the max scrollable area */
	max = docHeight - winHeight;
	progressBar.attr('max', max);

	

	$(document).on('scroll', function(){
	    value = $(window).scrollTop();
	    progressBar.attr('value', value);
	});
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
    if ($(window).scrollTop() > 500) {
        $('.main_h').addClass('stick');
    } else {
        $('.main_h').removeClass('stick');
    }
    if ($(window).scrollTop() > 600) {
        $('.main_h').addClass('move-down');
    } else {
        $('.main_h').removeClass('move-down');
    }
});