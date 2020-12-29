import PropTypes from 'prop-types';
import Link from 'next/link';
import { Home, Edit, Box, GitHub, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = ({ home }) => (
  <nav className={styles.nav}>
    <ul>
      {!home && (
        <Link href="/">
          <a aria-label="Home">
            <Home className={styles.icon} />
          </a>
        </Link>
      )}
      <Link href="/blog">
        <a aria-label="Blog">
          <Edit className={styles.icon} />
        </a>
      </Link>

      <Link href="/projects">
        <a aria-label="Projects">
          <Box className={styles.icon} />
        </a>
      </Link>
      <a
        id="gh"
        href="https://github.com/darkhist"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <GitHub className={styles.icon} />
      </a>
      <a href="mailto:qmsalas321@gmail.com" aria-label="Email">
        <Mail className={styles.icon} />
      </a>
    </ul>
  </nav>
);

Nav.defaultProps = {
  home: false
};

Nav.propTypes = {
  home: PropTypes.bool
};

export default Nav;
