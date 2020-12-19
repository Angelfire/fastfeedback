import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css'

export default function Home() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>fastfeedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fast Feedback
        </h1>
        <h2>Hi {auth?.user?.email}</h2>

        <button onClick={() => auth.signinWithGithub()}>Sign In</button>
        {auth?.user && (
          <button onClick={() => auth.signout()}>Sign out</button>
        )}

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div >
  )
}
