import { Provider } from 'next-auth/client'  // allow session state to be shared between pages
import '../styles/globals.css'

// custom app

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      < Component {...pageProps } />
    </Provider>
  ) 
}

export default MyApp

// https://blog.logrocket.com/how-to-use-nextauth-js-for-client-side-authentication-in-next-js/

// github oauth app - Client ID and Client secret
// app name: app-name
// http://localhost:3000  - Homepage URL
// Authorization callback URL:
// http://localhost:3000/api/auth/callback

// .env.local
// GITHUB_ID=<cilent id of your github auth app should go in here>
// GITHUB_SECRET=<clent secret of your github app should go in here>
// NEXTAUTH_URL=http://localhost:3000