import '../styles/globals.css'
import Navbar from "../components/Layout/Navbar";
import CookieConsentComp from "../components/CookieConsent"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <CookieConsentComp />
    </>)
}

export default MyApp
