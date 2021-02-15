import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from 'next-auth/client'
import styles from '../styles/Home.module.css'

const Home = () => {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className={styles.main}>
         <h1 className={styles.title}>Authentication in Next.js app using Next-Auth</h1>
        <div className={styles.user}>
          {loading && <div className={styles.title}>Loading...</div>}
          {session && 
            <>
              <p style={{ marginBottom: '10px' }}>Welcome, {session.user.name ?? session.user.email}</p>
              <br />
              <img src={session.user.image} alt="login user" classname={ styles.avatar} />
            </>
          }

          {!session && 
            <>
              <p className={styles.title}>Please Sign in</p>
              <img src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt="" className={styles.avatar} />
              <p className={styles.credit}>GIF by <a href="https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media">Another man</a> </p>
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default Home

