
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
	
	addWaveform1()
	addWaveform2()
	addWaveform3()
})

function addWaveform1(){
	const wavesurfer = WaveSurfer.create({
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
			WaveSurfer.Spectrogram.create({
				labels: false,
				height: 200,
				splitChannels: false,
			  }),
			

		]
	})
	wavesurfer.on('ready',() =>{
	wavesurfer.plugins[0].addRegion({
		content: "Target: Efraim Singing",
		start: 0, // start time in seconds
		end: 6, // end time in seconds
		color: '#ffd70031', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Reference: French Horn playing ode to joy",
		start: 6.2, // start time in seconds
		end: 12, // end time in seconds
		color: '#a78f0431', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Output: Strange Horns",
		start: 12.2, // start time in seconds
		end: 20, // end time in seconds
		color: '#ffd70031', // region color
		drag: false,
		resize: false,

	});
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
  

}


function addWaveform2(){
	const wavesurfer_horn = WaveSurfer.create({
		container: '#waveform_verse',
		waveColor: '#da00ab',
		progressColor: '#a90586',
		url: './static/audio/Verse1_1.mp3',
		plugins: [
			WaveSurfer.Regions.create(),
			WaveSurfer.Hover.create({
				lineColor: '#000000',
				lineWidth: 2,
				labelColor: '#fff',
				labelSize: '11px',
			  }),
			  WaveSurfer.Spectrogram.create({
				labels: false,
				height: 200,
				splitChannels: false,
			  }),
			

		]
	})
	wavesurfer_horn.on('ready',() =>{
	wavesurfer_horn.plugins[0].addRegion({
		content: "Target: Suno Rapping",
		start: 0, // start time in seconds
		end: 6.6, // end time in seconds
		color: '#da00ab31', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Reference: Abdou Rapping",
		start: 6.7, // start time in seconds
		end: 13.8, // end time in seconds
		color: '#a9058631', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Output: Abdou Rapping Verse 1",
		start: 13.9, // start time in seconds
		end: 20, // end time in seconds
		color: '#da00ab31', // region color
		drag: false,
		resize: false,

	});
	})
	wavesurfer_horn.on('interaction', () => {
		wavesurfer_horn.playPause();
		
	  })
}

function addWaveform3(){
	const wavesurfer = WaveSurfer.create({
		container: '#waveform_woman',
		waveColor: '#00bbff',
		progressColor: '#00749e',
		url: './static/audio/NotTheSame.mp3',
		plugins: [
			WaveSurfer.Regions.create(),
			WaveSurfer.Hover.create({
				lineColor: '#000000',
				lineWidth: 2,
				labelColor: '#fff',
				labelSize: '11px',
			  }),
			WaveSurfer.Spectrogram.create({
				labels: false,
				height: 200,
				splitChannels: false,
			  }),
			

		]
	})
	wavesurfer.on('ready',() =>{
	wavesurfer.plugins[0].addRegion({
		content: "Target: Efraim rapping",
		start: 0, // start time in seconds
		end: 3.5, // end time in seconds
		color: '#00bbff31', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Reference: SampleMe speaking",
		start: 3.6, // start time in seconds
		end: 7.3, // end time in seconds
		color: '#00749e31', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "SampleMe rapping",
		start: 7.4, // start time in seconds
		end: 20, // end time in seconds
		color: '#00bbff31', // region color
		drag: false,
		resize: false,

	});
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
  

}