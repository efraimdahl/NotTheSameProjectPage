
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
	addTrackAudios()
	addWaveform1()
	addWaveform2()
	addWaveform3()
	addWaveform4()
	addWaveform5()
	annotatefinal()
})

function addTrackAudios(){
	const wavesurfer1 = WaveSurfer.create({
		container: '#suno_piano',
		waveColor: '#ffd700',
		progressColor: '#a78f04',
		url: './static/audio/SunoPiano.mp3',
		plugins: [
			WaveSurfer.Hover.create({
			  lineColor: '#000000',
			  lineWidth: 2,
			  labelColor: '#fff',
			  labelSize: '11px',
			}),
		  ],
	})
	wavesurfer1.on('interaction', () => {
		wavesurfer1.playPause()
	  })
	const wavesurfer2 = WaveSurfer.create({
		container: '#suno_orchestral',
		waveColor: '#da00ab',
		progressColor: '#a90586',
		url: './static/audio/SunoOrchestral.mp3',
		plugins: [
			WaveSurfer.Hover.create({
			  lineColor: '#000000',
			  lineWidth: 2,
			  labelColor: '#fff',
			  labelSize: '11px',
			}),
		  ],
	})
	wavesurfer2.on('interaction', () => {
		wavesurfer2.playPause()
	  })

	const wavesurfer3 = WaveSurfer.create({
		container: '#suno_major',
		waveColor: '#ffd700',
		progressColor: '#a78f04',
		url: './static/audio/SunoMajor.mp3',
		plugins: [
			WaveSurfer.Hover.create({
			  lineColor: '#000000',
			  lineWidth: 2,
			  labelColor: '#fff',
			  labelSize: '11px',
			}),
		  ],
	})
	wavesurfer3.on('interaction', () => {
		wavesurfer3.playPause()
	  })
	
	  const wavesurfer4 = WaveSurfer.create({
		container: '#suno_rap',
		waveColor: '#da00ab',
		progressColor: '#a90586',
		url: './static/audio/SunoRap.mp3',
		plugins: [
			WaveSurfer.Hover.create({
			  lineColor: '#000000',
			  lineWidth: 2,
			  labelColor: '#fff',
			  labelSize: '11px',
			}),
		  ],
	})
	wavesurfer4.on('interaction', () => {
		wavesurfer4.playPause()
	  })

}

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
		waveColor: '#ffa500',
		progressColor: '#bc7b04',
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
		color: '#ffa50031', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Reference: Abdou Rapping",
		start: 6.7, // start time in seconds
		end: 13.8, // end time in seconds
		color: '#bc7b0431', // region color
		drag: false,
		resize: false,

	});
	wavesurfer_horn.plugins[0].addRegion({
		content: "Output: Abdou Rapping Verse 1",
		start: 13.9, // start time in seconds
		end: 20, // end time in seconds
		color: '#ffa500b31', // region color
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
		waveColor: '#ff0000',
		progressColor: '#ac0707',
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
		color: '#ff000031', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Reference: SampleMe speaking",
		start: 3.6, // start time in seconds
		end: 7.3, // end time in seconds
		color: '#ac070731', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "SampleMe rapping",
		start: 7.4, // start time in seconds
		end: 20, // end time in seconds
		color: '#ff000031', // region color
		drag: false,
		resize: false,

	});
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
  

}

function addWaveform4(){
	const wavesurfer = WaveSurfer.create({
		container: '#waveform_verse2',
		waveColor: '#ff0062',
		progressColor: '#b40347',
		url: './static/audio/Verse1_2.mp3',
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
		content: "Target: Suno Rapping",
		start: 0, // start time in seconds
		end: 6.5, // end time in seconds
		color: '#ff006231', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Output: Elevenlabs (Will) rapping",
		start: 6.6, // start time in seconds
		end: 14, // end time in seconds
		color: '#b4034731', // region color
		drag: false,
		resize: false,

	});
	
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
}


function addWaveform5(){
	const wavesurfer = WaveSurfer.create({
		container: '#waveform_nunc',
		waveColor: '#ff00ff',
		progressColor: '#ac07ff',
		url: './static/audio/Nunc.mp3',
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
		content: "Efraims (plural) singing",
		start: 0, // start time in seconds
		end: 11, // end time in seconds
		color: '#ff00ff31', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Output: Grimes (plural) singing",
		start: 11.1, // start time in seconds
		end: 22, // end time in seconds
		color: '#ac07ff31', // region color
		drag: false,
		resize: false,

	});
	
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
  

}


function annotatefinal(){
	const wavesurfer = WaveSurfer.create({
		container: '#finalsong',
		waveColor: '#4800ff',
		progressColor: '#23007a',
		url: './static/audio/finalsong.mp3',
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
		content: "Suno Major resampled",
		start: 0, // start time in seconds
		end: 6, // end time in seconds
		color: '#4800ff31', // region color
		drag: false,
		resize: false,

	});

	wavesurfer.plugins[0].addRegion({
		content: "Suno Piano Resampled \n Efraim singing",
		start: 7, // start time in seconds
		end: 35, // end time in seconds
		color: '#083dff6e', // region color
		drag: false,
		resize: false,

	});

	wavesurfer.plugins[0].addRegion({
		content: "Suno Rap Recreated \n Suno Piano Resampled \n Layered Voice Swap",
		start: 36, // start time in seconds
		end: 85, // end time in seconds
		color: '#089cff6e', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Suno Major + Grimes Singing",
		start: 86, // start time in seconds
		end: 117, // end time in seconds
		color: '#08fff36e', // region color
		drag: false,
		resize: false,

	});

	wavesurfer.plugins[0].addRegion({
		content: "Crazy Voice Swap Layering + Jazzy FX",
		start: 118, // start time in seconds
		end: 130, // end time in seconds
		color: '#ff000031', // region color
		drag: false,
		resize: false,

	});

	wavesurfer.plugins[0].addRegion({
		content: "Suno Rap + Fx",
		start: 131, // start time in seconds
		end: 146, // end time in seconds
		color: '#08ffce6e', // region color
		drag: false,
		resize: false,

	});
	wavesurfer.plugins[0].addRegion({
		content: "Suno Orchestral",
		start: 147, // start time in seconds
		end: 250, // end time in seconds
		color: '#08ff7b6e', // region color
		drag: false,
		resize: false,

	});
	
	})
	wavesurfer.on('interaction', () => {
		wavesurfer.playPause();
		
	  })
  

}