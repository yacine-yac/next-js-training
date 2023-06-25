import '../styles/globals.css'
import Auth from '../__Components/authorization'
import { SessionProvider } from 'next-auth/react'
export default function App({ Component, pageProps  }) { 
 
   return   <SessionProvider session={pageProps.session} >
                {Component?.auth 
                                ? <Auth><Component {...pageProps}/></Auth> 
                                : <Component {...pageProps}/> 
                }
                {/* <Component {...pageProps}/> */}
            </SessionProvider>
}