import '../styles/index.css'
import Sidebar from '../components/sidebar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}
