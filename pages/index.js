import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ToDoContainer from "../components/ToDoList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <ToDoContainer />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
