import * as Tone from 'tone'

export const startTone = () => {
  Tone.start()
    .then(() => 'started')
    .catch(() => {
      throw new Error('Failed to start Tone')
    })
}

export const synth = new Tone.PolySynth(Tone.Synth, {
  volume: -3,
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
