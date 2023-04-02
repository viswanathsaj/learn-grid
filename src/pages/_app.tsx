import { type AppType } from 'next/app'

import { api } from '@component/utils/api'

import '@component/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default api.withTRPC(MyApp)
