import Image from 'next/image';
import Nav from '../components/Nav';
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

const Home = () => (
  <Layout>
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>darkhist</h1>
      </div>

      <section className={styles.section}>
        <div className={styles.about}>
          <p>Hey, I&apos;m Quinn</p>
          <p>
            full Stack Software Engineer @
            <a
              href="https://principal.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.principal}
            >
              OpenLoop
            </a>
          </p>
          {/* Currently, I&apos;m making cool stuff at
            <a
              href="https://principal.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.principal}
            >
              Principal
            </a>
            <br /> I&apos;m really into accessibility, open source software, art, collecting pins,
            and emoticons with noses
            <span role="img" aria-label="smiley face" className={styles.smile}>
              :~)
            </span>
            <a className={styles.hi} href="mailto:qmsalas321@gmail.com">
              Say hello!
            </a>
          </p> */}
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
