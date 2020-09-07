import Head from 'next/head';
import Nav from '../components/nav';
import styles from '../styles/blog.module.css';

const Blog = () => (
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

    <main className={styles.container}>
      <h1> Welcome to my blog</h1>
    </main>
  </div>
);

export default Blog;
