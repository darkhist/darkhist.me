import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from './Nav';
import styles from '../styles/layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>Quinn Salas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <header>
      <Nav />
    </header>

    <main>{children}</main>
  </div>
);

Layout.defaultProps = {
  children: []
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Layout;
