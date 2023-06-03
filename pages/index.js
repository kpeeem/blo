import Head from 'next/head';
import { useControls } from 'leva';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { name, fontSize } = useControls({
    name: 'World',
    fontSize: {
      value: 4,
      min: 0,
      max: 100,
      step: 1,
    },
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ fontSize }}>
          Welcome my webpage
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>soul</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
