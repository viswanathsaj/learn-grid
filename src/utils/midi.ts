import { WebMidi } from 'webmidi'
import { synth, startTone } from './synth'
import { Midi } from 'tonal'

const midiInput = WebMidi.getInputByName('Launchpad X LPX MIDI Out')
const midiOutput = WebMidi.getOutputByName('Launchpad X LPX MIDI In')

export const listen = () => {
  if (midiInput && midiOutput) {
    startTone()
    midiInput.addListener('noteon', (e) => {
      console.log(Midi.midiToNoteName(e.note.number))
      // console.log((e.note.identifier))
      synth.triggerAttack(e.note.identifier, synth.now(), e.note.attack)
    })
    midiInput.addListener('noteoff', (e) => {
      synth.triggerRelease(e.note.identifier, e.note.release + 1)
    })

    midiInput.addListener('sysex', (e) => {
      console.log(e.message)
    })
  } else {
    console.log("Can't Find Device")
  }
}

export const sleep = () => {
  try {
    midiOutput.send([240, 0, 32, 41, 2, 12, 9, 0, 247])
  } catch (error) {
    console.log(error)
  }
}

export const playNote = (note: string) => {
  try {
    midiOutput.playNote(note, {
      duration: 1000
    })
  } catch (error) {
    console.log(error)
  }
}
;['F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']

export const noteConfig = () => {
  try {
    midiOutput.send([240, 0, 32, 41, 2, 12, 22, 247])
  } catch (error) {
    console.log(error)
  }
}

export const getInfo = () => (midiOutput.send([240, 126, 127, 6, 1, 247]) ? true : false)

export const noteMode = () => (midiOutput.send([240, 0, 32, 41, 2, 12, 0, 1, 247]) ? true : false)
