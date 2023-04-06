import type { NextComponentType } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { WebMidi } from 'webmidi'
import synth from '@utils/synth'
import * as Tone from 'tone'

const Synth: NextComponentType = () => {
  const [midi, setMidi] = useState(false)

  WebMidi.enable({ sysex: true })
    .then(() => {
      setMidi(true)
    })
    .catch((err) => alert(err))

  if (midi) {
    function startListener() {
      const myInput = WebMidi.getInputByName('Launchpad X LPX MIDI Out')
      return myInput
    }

    const myInput = startListener()

    if (myInput) {
      myInput.addListener('noteon', (e) => {
        console.log(Tone.Transport.state)
        synth.triggerAttack(e.note.identifier)
      })
      myInput.addListener('noteoff', (e) => {
        synth.triggerRelease(e.note.identifier, e.note.release)
      })
    } else {
      console.log("Can't Find Device")
    }
    return (
      <>
        <Head>
          <title>Learn Grid</title>
          <meta name='description' content='Generated by create-t3-app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
          <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
            <button>Start</button>
          </div>
        </main>
      </>
    )
  } else {
    return <div>WebMidi Not Enabled</div>
  }
}

export default Synth
