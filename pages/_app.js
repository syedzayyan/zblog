import '../styles/globals.css'
import Navbar from "../components/Layout/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>)
}

export default MyApp
