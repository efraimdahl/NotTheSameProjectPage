
window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

	let wavesurferplaying = false
	const wavesurfer = WaveSurfer.create({
		container: '#waveform',
		waveColor: '#4F4A85',
		progressColor: '#383351',
		url: './static/audio/OriginalBeat.mp3',
		plugins: [
			WaveSurfer.Hover.create({
			  lineColor: '#000000',
			  lineWidth: 2,
			  labelColor: '#fff',
			  labelSize: '11px',
			}),
		  ],
	})
		
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause()
	  })
  


})
