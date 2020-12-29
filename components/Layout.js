import PropTypes from 'prop-types';
import Head from 'next/head';
import Nav from './Nav';
import styles from '../styles/layout.module.css';

const Layout = ({ children, home }) => (
  <div className={styles.container}>
    <Head>
      <title>Quinn Salas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="The official website and blog of Quinn Salas, a software engineer with a passion for designing beautiful and accessible web experiences"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎱</text></svg>"
      />
    </Head>

    <header>
      <Nav home={home} />
    </header>

    <main>{children}</main>
  </div>
);

Layout.defaultProps = {
  children: [],
  home: false
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  home: PropTypes.bool
};

export default Layout;
