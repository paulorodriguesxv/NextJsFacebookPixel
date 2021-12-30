import { createContext, useEffect, useState, useContext } from 'react';

const FacebookContext = createContext({
    pixel: null, /* a raw pixel object from react-facebook-pixel */
    pixelId: null,
    trackEvent: () => {} /* function to track events */
  });

export const FacebookProvider = ({facebookPixelId, children}) => {
  
  const [reactPixel, setReactPixel] = useState()
  const [pixelId, setPixelId] = useState()

  const isFacebbokPixelIdIsPresent = () => {

    if (!facebookPixelId){
      console.log('No facebook Pixel Id has been defined. Please set facebookPixelId prop on FacebookProvider')
      return false
    }
    return true
  }

  useEffect(() => {
    if (!isFacebbokPixelIdIsPresent()) {
      return
    }

    let fb

    import('react-facebook-pixel')
    .then((module) => (fb = module.default))
    .then((ReactPixel) => {      
      ReactPixel.init(facebookPixelId) 

      /* for more information, please read the react-facebook-pixel docs on
          https://github.com/zsajjad/react-facebook-pixel */
      ReactPixel.grantConsent()

      ReactPixel.pageView()

      setReactPixel(fb)
      setPixelId(facebookPixelId)

    })
  },[])

  const trackEventHandle = (event, data) => {
    if (!isFacebbokPixelIdIsPresent()) {
      return
    }

    reactPixel.track(event, data)
  }

  return (
    <FacebookContext.Provider
      value={{
        pixel: reactPixel,
        pixelId: pixelId,
        trackEvent: trackEventHandle
      }}
    >
      {children}
    </FacebookContext.Provider>
  );  
}

const useFacebook = () => {
  const context = useContext(FacebookContext);

  return context;
}

export default useFacebook