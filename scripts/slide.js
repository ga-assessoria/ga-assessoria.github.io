$('.carousel').carousel({
	interval: 8000
});

$('#carouselExampleControls').carousel('pause');

$('#playButton').click(function () {
    $('.carousel').carousel('cycle');
	$('#pauseButton').css({ 'color': 'rgba(255,255,255, 0.5)'});
	$('#playButton').css({ 'color': 'rgba(48,13,40, 1)'});

});
$('#pauseButton').click(function () {
    $('.carousel').carousel('pause');
	$('#playButton').css({ 'color': 'rgba(255,255,255, 0.5)'});
	$('#pauseButton').css({ 'color': 'rgba(48,13,40, 1)'});
});