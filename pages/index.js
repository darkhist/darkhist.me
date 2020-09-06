import Head from 'next/head';
import Nav from '../components/nav';
import styles from '../styles/home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Quinn Salas</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <header className={styles.header}>
      <Nav />
    </header>

    <main className={styles.main}>
      <h1 className={styles.title}>
        hi, I&apos;m <del>Quinn</del>
        <br />
        <ins>darkhist</ins>
      </h1>
    </main>
  </div>
);

export default Home;
