// const synth = new Tone.Synth().toDestination();
// const now = Tone.now()
// synth.triggerAttackRelease("C4", "8n", now)
// synth.triggerAttackRelease("E4", "8n", now + 0.5)
// synth.triggerAttackRelease("G4", "8n", now + 1)

// const sampler = new Tone.Sampler({
//     urls: {
//         A1: "assets/A1.mp3",
//         B1: "assets/B1.mp3",
//         C1: "assets/C1.mp3",
//     },
//     release: 0.5,
//   }).toDestination();

  const sampler = new Tone.Sampler({
    urls: {
      "C4": "A1.mp3",
      "D#4": "B1.mp3",
      "F#4": "C1.mp3",
    },
    release: 1,
    baseUrl: "assets/",
    
  }).toDestination();



  

//   Tone.Transport.scheduleRepeat((time) => {
//     // use the callback time to schedule events
//     osc.start(time).stop(time + 0.1);
//   }, "4n");
//   // transport must be started before it starts invoking events
// const seq = new Tone.Sequence((time, note) => {
// 	sampler.triggerAttackRelease(note, 0.1, time);
// 	// subdivisions are given as subarrays
// }, ["D#4"]).start();

  

const synth = new Tone.Synth().toDestination();
const seq = new Tone.Sequence((time, note) => {
	sampler.triggerAttackRelease(note, 0.1, time);
	// subdivisions are given as subarrays
}, ["D#4"]).start(0);
  


// synth.triggerAttackRelease("A1", "8n", now)
// synth.triggerAttackRelease("B1", "8n", now + 0.5)
// synth.triggerAttackRelease("C1", "8n", now + 1)