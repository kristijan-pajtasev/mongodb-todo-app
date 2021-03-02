import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ToDoContainer from "../components/ToDoList";
import CreateTodo from "../components/CreateTodo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <ToDoContainer />
          <CreateTodo />
      </main>

      <footer className={styles.footer}>

      </footer>
    </>
  )
}
