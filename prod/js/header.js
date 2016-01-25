$(document).ready(function(){ 
	$(".nav-list a").click(function(){
		$("input#showblock").prop('checked', false);
	});

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
