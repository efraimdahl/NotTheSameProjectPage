
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

	
	const wavesurfer_horn = WaveSurfer.create({
		container: '#waveform_horn',
		waveColor: '#ffd700',
		progressColor: '#a78f04',
		url: './static/audio/Horn.mp3',
		plugins: [
			WaveSurfer.Regions.create(),
			WaveSurfer.Hover.create({
				lineColor: '#000000',
				lineWidth: 2,
				labelColor: '#fff',
				labelSize: '11px',
			  }),
			

		]
	})
	wavesurfer_horn.on('ready',() =>{
	wavesurfer_horn.plugins[0].addRegion({
		content: "Target: Efraim Singing",
		start: 0, // start time in seconds
		end: 6, // end time in seconds
		color: '#ffd70031', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Reference: French Horn playing ode to joy",
		start: 6.2, // start time in seconds
		end: 12, // end time in seconds
		color: '#a78f0431', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Output: Strange Horns",
		start: 12.2, // start time in seconds
		end: 20, // end time in seconds
		color: '#ffd70031', // region color
		drag: false,
		resize: false,

	});
	})
	wavesurfer_horn.on('interaction', () => {
		wavesurfer_horn.playPause();
		
	  })
  
	  /*
	 
	  
		
		
			  */

			  

})
