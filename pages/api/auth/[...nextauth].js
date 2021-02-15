import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)

// https://blog.logrocket.com/how-to-use-nextauth-js-for-client-side-authentication-in-next-js/

// http://localhost:3000/api/auth/signin
