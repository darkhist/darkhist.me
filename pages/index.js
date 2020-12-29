import Layout from '../components/Layout';

import styles from '../styles/home.module.css';

const Home = () => (
  <Layout home>
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          <del>Quinn Salas</del>
          <br />
          <ins>darkhist</ins>
        </h1>
      </div>

      <section className={styles.section}>
        <div className={styles.about}>
          <p>he / him | kc / dsm</p>
          <p>full stack software engineer </p>
          <p>
            currently breaking stuff at
            <a
              href="https://openloophealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              OpenLoop
            </a>
          </p>

          <p>
            follow me on
            <a
              href="https://instagram.com/darkhist"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
