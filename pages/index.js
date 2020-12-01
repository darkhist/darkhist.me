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
          <p>It&apos;s nice to meet you</p>
          <p>I&apos;m a software engineer based in Des Moines</p>
          <p>
            Currently, I&apos;m making cool stuff at
            <a
              href="https://principal.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.principal}
            >
              Principal
            </a>
          </p>
          <p>
            I&apos;m really into accessibility, open source software, art, collecting pins, and
            emoticons with noses
            <span role="img" aria-label="smiley face" className={styles.smile}>
              :~)
            </span>
          </p>
          <p>
            <a className={styles.hi} href="mailto:qmsalas321@gmail.com">
              Say hello!
            </a>
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
