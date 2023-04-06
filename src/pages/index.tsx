import { type NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { WebMidi } from 'webmidi'

const Home: NextPage = () => {
  const [status, setStatus] = useState('disabled')

  WebMidi.enable({ sysex: true })
    .then(() => {
      setStatus('enabled')
    })
    .catch((err) => alert(err))

  if (status == 'enabled') {
    const DynamicComponent = dynamic(() => import('@components/Synth'), { ssr: false })
    return (
      <>
        <DynamicComponent />
      </>
    )
  }

  return <div>WebMidi Not Enabled</div>
}

export default Home
