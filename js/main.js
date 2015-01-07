$('[data-action="toggle-close"]').click(function(e) {
	e.preventDefault();
	$($(this).attr('data-target')).toggleClass('closed');
});

$(window).resize(function() {
	$('#mainnav').toggleClass('closed', $(window).width() < 512);
	$('#serverlist').toggleClass('closed', $(window).width() < 768);
});

$(window).resize();

