/* pages/_app.js */
import '../styles/globals.css'
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp