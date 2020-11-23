import '../styles/index.css'
// import HeaderNav from '../components/navbar'
import HeaderNav from '../components/headernav'

const title = 'Grace Baptist Church of Blue Bell'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />
    </>
  )
}
