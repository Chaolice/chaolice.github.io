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

  // const sampler = new Tone.Sampler({
  //   urls: {
  //     "C4": "A1.mp3",
  //     "D#4": "B1.mp3",
  //     "F#4": "C1.mp3",
  //   },
  //   release: 1,
  //   baseUrl: "assets/",
    
  // }).toDestination();



  

  //a player with an envelope
let sampler = new Tone.Sampler({
  "A1": "assets/A1.mp3",
  "A2": "assets/A2.mp3",
  "A3": "assets/A3.mp3",
  "B2": "assets/B2.mp3",
  "B3": "assets/B3.mp3",
  "B1": "assets/B1.mp3",
  "C1": "assets/C1.mp3",
  "C2": "assets/C2.mp3",
  "C3": "assets/C3.mp3",
  "C4": "assets/C4.mp3",

  "D6":"assets/keyA.MP3",
  "D1":"assets/keyW.MP3",
  "D2":"assets/keyE.MP3",
  "D3":"assets/keyD.MP3",
  "D4":"assets/keyX.MP3",
  "D5":"assets/keyY.MP3",

  "E6":"assets/keyF.MP3",
  "E1":"assets/keyT.MP3",
  "E2":"assets/keyZ.MP3",
  "E3":"assets/keyH.MP3",
  "E4":"assets/keyB.MP3",
  "E5":"assets/keyV.MP3",

  "F6":"assets/keyJ.MP3",
  "F1":"assets/keyI.MP3",
  "F2":"assets/keyO.MP3",
  "F3":"assets/keyL.MP3",
  "F4":"assets/keyComma.MP3",
  "F5":"assets/keyM.MP3",
});
sampler.toDestination();

const seq = new Tone.Sequence((time, note) => {
	sampler.triggerAttackRelease(note, 0.1, time);
	// subdivisions are given as subarrays
}, ["C4"]).start(0);


// const loop = new Tone.Loop((time) => {
// 	// triggered every eighth note.
// 	sampler.triggerAttackRelease(note, 0.1, time);
// 	// subdivisions are given as subarrays
// }, ["F#4"]).start(0);






  


// synth.triggerAttackRelease("A1", "8n", now)
// synth.triggerAttackRelease("B1", "8n", now + 0.5)
// synth.triggerAttackRelease("C1", "8n", now + 1)