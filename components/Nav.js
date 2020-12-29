import PropTypes from 'prop-types';
import Link from 'next/link';
import { Home, Edit, Box, GitHub, Mail } from 'react-feather';

import styles from '../styles/nav.module.css';

const Nav = ({ home }) => (
  <nav className={styles.nav}>
    <ul>
      {!home && (
        <li className={styles.link}>
          <Link href="/">
            <a aria-label="Home">home</a>
          </Link>
        </li>
      )}

      <li className={styles.link}>
        <Link href="/blog">
          <a aria-label="Blog">blog</a>
        </Link>
      </li>

      <li className={styles.link}>
        <Link href="/projects">
          <a aria-label="Projects">work</a>
        </Link>
      </li>

      <li className={styles.link}>
        <a
          id="gh"
          href="https://github.com/darkhist"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          github
        </a>
      </li>

      <li className={styles.link}>
        <a href="mailto:qmsalas321@gmail.com" aria-label="Email">
          contact
        </a>
      </li>
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
