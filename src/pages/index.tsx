import { type NextPage } from 'next'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const DynamicComponent = dynamic(() => import('@components/Synth'), { ssr: false })

  return (
    <>
      <DynamicComponent />
    </>
  )
}

export default Home
