import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

const Home = () => (
  <Layout>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        hi, I&apos;m <del>Quinn</del>
        <br />
        <ins>darkhist</ins>
      </h1>

      <section className={styles.section}>
        <div className={styles.about}>
          <p>I&apos;m a software engineer based in Des Moines, IA</p>
          <p>
            Currently, I work at
            <a
              href="https://principal.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.principal}
            >
              Principal
            </a>
            where I help make fantastic web experiences for people
          </p>

          <p>I&apos;m passionate about accessibility, open source software, and electronic music</p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
