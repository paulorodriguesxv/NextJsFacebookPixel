import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { FacebookProvider, useFacebook } from '../facebook'

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

function MyApp({ Component, pageProps }) {

  const { pixel } = useFacebook()
  const router = useRouter()

  /* trigger a PageView event every time a new route is accessed */
  useEffect(() => {
      router.events.on('routeChangeComplete', () => {
        pixel.pageView()
      })
  },[router.events])
  
  
  return (
    <FacebookProvider facebookPixelId={FACEBOOK_PIXEL_ID}>
      <Component {...pageProps} />
    </FacebookProvider>
  )
}

export default MyApp



