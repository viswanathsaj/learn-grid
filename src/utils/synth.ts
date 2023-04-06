import * as Tone from 'tone'

Tone.start()
  .then(() => console.log('started'))
  .catch(() => console.log('failed'))

Tone.Transport.start()

const synth = new Tone.PolySynth(Tone.Synth, {
  volume: -5,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    release: 1.5,
    releaseCurve: 'bounce',
    sustain: 0.2
  },
  oscillator: {
    modulationType: 'triangle',
    partialCount: 0,
    partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}).toDestination()

export default synth
