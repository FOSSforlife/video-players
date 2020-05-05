import { AppProps } from 'next/app'
import 'video.js/dist/video-js.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
